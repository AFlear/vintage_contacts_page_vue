<template>
  <section class="section section--contact-info">
    <div class="container px-sm-0">
      <div class="row">
        <div class="col-12">
          <h1 class="h1 mb-4 pb-lg-2">
            Contacts
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <h2 class="h2 mb-2 pb-1 text-center text-md-left">
            <span class="text-color--green">GMS</span>
            Headquarters
          </h2>
          <div class="row pt-3 mb-4 mb-lg-0">
            <div class="col-12 col-sm-6 text-center text-sm-left">
              <div class="mb-2 mb-md-4">
                <p>Global Message Services Ukraine LLC</p>
                <p>Bundesstrasse 5 | 3rd Floor</p>
                <p>6300 Zug</p>
                <p>Switzerland</p>
              </div>

              <a class="p-xl link link--hover-animation text-color--green" href="tel:+41415446200" title="Call HR">
                +41 41 544 62 00
              </a>
            </div>
            <div class="col-12 col-sm-6 mb-2 mt-4 my-sm-0 pl-lg-2">
              <div class="d-flex justify-content-between d-md-block align-items-center">
                <p>Email</p>
                <a href="mailto:info@gms-worldwide.com" title="info@gms-worldwide.com"
                   class="link link--hover-animation text-uppercase p2 mr-0 mx-md-auto text-color--green">
                  info@gms-worldwide.com
                </a>
              </div>
              <div class="d-flex justify-content-between d-md-block align-items-center">
                <p>Send message</p>
                <a href="viber://add?number=41415446200" title="Viber us"
                   class="link link--hover-animation text-uppercase p2 mr-0 mx-md-auto text-color--green">Viber us</a>
              </div>
              <div class="d-flex justify-content-between d-md-block align-items-center">
                <p>Send form</p>
                <a href="#contact-form" title="Contact us"
                   class="link link--hover-animation text-uppercase p2 mr-0 mx-md-auto text-color--green">Contact us</a>
              </div>
            </div>
          </div>

        </div>
        <div class="col-12 col-lg-6 pl-lg-5">
          <h2 class="h2 pb-3 text-center text-md-left">
            Technical support <span class="text-color--green">24/7</span>
          </h2>
          <div class="pt-lg-1 pb-2 pb-lg-4">
            <p>
              GMS understands that it can be hard to follow all new technologies. We
              regularly provide for all our clients educational trainings to make your
              operator`s business earn more and better though our best practices.
            </p>
          </div>
          <a href="tel:+41 41 544 62 06"
             class="link link--hover-animation text-color--green text-center text-md-left p-xl"
             title="+41 41 544 62 06">+41 41 544 62 06
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contactInfo",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
._link-big {
  margin-bottom: 43px;
}
</style>
