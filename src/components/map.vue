<template>
  <div id="Map" ref="Map"></div>
</template>

<script>
import {serverBus} from "../main";
import GoogleMapsApiLoader from 'google-maps-api-loader';
import {mapConfig} from '../assets/js/map-config.js';
import someImage from '../assets/images/marker.png'

export default {
  name: "Map",
  props: {
    center: Object
  },
  data() {
    return {
      google: null,
      map: null,
      marker: null,
      mapConfig: null,
      location: {lat: 50.45466, lang: 30.5238},
      apiKey: 'AIzaSyDLSO7Ja9Pg4_ccrk3w8-DPpYHAFBg-AS4'
    }
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    });
    this.google = googleMapApi;
    this.mapConfig = mapConfig;
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.Map;
      this.map = new this.google.maps.Map(mapContainer, {
        center: {
          lat: this.location.lat,
          lng: this.location.lang
        },
        zoom: 12,
        styles: this.mapConfig
      });
      this.marker = new this.google.maps.Marker({
        position: {
          lat: this.location.lat,
          lng: this.location.lang
        },
        icon: someImage
      });
      this.marker.setMap(this.map);
    },
    changeMarker() {
      this.map.setCenter({
        lat: this.location.lat,
        lng: this.location.lang
      });
      this.marker.setPosition({
        lat: this.location.lat,
        lng: this.location.lang
      });
    }
  },
  created() {
    // Using the server bus
    serverBus.$on('locationChanged', (location) => {
      this.location = {lang: location.lang, lat: location.lat};
      this.changeMarker()

    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#Map {
  height: 500px;
  background: #202020;
}
</style>
