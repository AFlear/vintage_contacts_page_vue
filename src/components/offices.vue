<template>
  <section class="section section--offices text-white">
    <div class="container px-sm-0">
      <div class="row">
        <div class="col-12 col-md-6 pt-lg-5">
          <h2 class="h2 my-3 pt-4 text-center text-md-left">
            Our Offices
          </h2>

          <div class="d-flex pt-1 mb-3 justify-content-between justify-content-lg-start" id="list-city">
            <a v-for="item in items" :key="item.text"
               v-bind:class="{active:selected===item.id}" class="link link--color__white link--decoration-none link--hover-animation text-uppercase p3"
               v-on:click="serverSelected(item)">
              {{ item.text }}
            </a>
          </div>
          <h3 class="h3 pt-3 mb-3">Global Message Services Ukraine LLC</h3>
          <p class="p4">
            Kuiv, Stepan Bandera, 33 <br class="d-none d-sm-block">
            02066 <br class="d-none d-sm-block">
            Ukraine
          </p>
        </div>
        <div class="col-12 col-md-6">
          <div class="map__container">
            <div class="map">
              <Map></Map>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {serverBus} from "../main";

export default {
  name: "offices",
  methods: {
    serverSelected: function (item) {
      // Using the server bus
      this.selected = item.id;
      serverBus.$emit('locationChanged', {lat: item.lat, lang: item.lang});
    }
  },
  data() {
    return {
      items: [
        {text: "Kyiv", id: 0, lat: 50.45466, lang: 30.5238},
        {text: "New York", id: 1, lat: 40.7166638, lang: -74.0},
        {text: "Guangzhou", id: 2, lat: 23.128994, lang: 113.253250},
        {text: "Barcelona", id: 3, lat: 41.390205, lang: 2.154007},
      ],
      selected: 0,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.link {
  margin: 0;
  letter-spacing: 0.95px;
  font-weight: 900;

  &.active {
    color: #3db565;
  }

  &:nth-child(1) {
    margin-right: 20px;
  }
  &:nth-child(2) {
    margin-right: 22px;
  }
  &:nth-child(3) {
    margin-right: 36px;
  }
}

.p4 {
  padding-top: 10px;
}
</style>
