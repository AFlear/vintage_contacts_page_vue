<template>
  <div id="app">
    <contact-info/>
    <offices/>
    <contact-form/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import ContactInfo from "@/components/contact-info";
import Offices from "@/components/offices";
import ContactForm from "@/components/contact-form";
export default {
  name: "App",
  components: {ContactForm, Offices, ContactInfo}
}
</script>
