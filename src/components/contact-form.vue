<template>
  <div class="section section--form overflow-hidden">
    <div class="point1"></div>
    <div class="container px-sm-0">
      <div class="row">
        <div class="col-12">
          <h2 class="h2 text-center text-md-left text-white">Contact Us</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <form @submit.prevent="checkForm" class="form form--contact" id="contact-form">

            <div class="form__item pt-1" :class="{'form--error': errors.name}">
              <input class="input" type="text" name="name" id="name" v-model="name"
                     @blur="checkField('name', $event.target.value)">
              <label class="label flex-shrink-0 pr-3 pr-lg-5" for="name">Name</label>
              <hr>
              <p class="form--error__label" v-if="errors.name">
                {{ errors.name }}
              </p>
            </div>
            <div class="form__item" :class="{'form--error': errors.phone}">
              <input class="input" type="text" id="phone" name="phone" placeholder=""
                     pattern="+[0-9()-.^+\/*%^]" v-model="phone"
                     @blur="checkField('phone', $event.target.value)">
              <label for="phone" class="label flex-shrink-0 pr-3 pr-lg-5">Phone</label>
              <hr>
              <p class="form--error__label" v-if="errors.phone">
                {{ errors.phone }}
              </p>
            </div>
            <div class="form__item" :class="{'form--error': errors.email}">
              <input class="input" type="email" name="email" id="email"
                     v-model="email" @blur="checkField('email', $event.target.value)">
              <label class="label flex-shrink-0 pr-3 pr-lg-5" for="email">E-mail</label>
              <hr>
              <p class="form--error__label" v-if="errors.email">
                {{ errors.email }}
              </p>
            </div>

            <div class="d-flex align-items-center pb-3 pt-2 mb-4">
              <div class="form--checkbox">
                <label for="checkboxFiveInput">
                  <input type="checkbox" name="check" id="checkboxFiveInput" v-model="checked">
                  <span class="form--checkbox__input"></span>
                </label>
              </div>
              <p class="p1 text-white">I agree the processing of personal data</p>
            </div>

            <button :disabled="errors.name || errors.email || errors.phone"
                    class="button button--black" type="submit" title="Get in touch">
                    <b-spinner variant="success"  class="d-none" :class="{'d-inline':loading}" label="Text Centered"></b-spinner>
              <span :class="{'d-none':loading}">Get in touch</span>
            </button>

          </form>

        </div>
        <div class="col-12 col-md-6 pl-md-4 pt-3">
          <p class="text-animation p1 pl-2 pt-1 text-color--black font-weight-bold">Please tell us more about your
            request and give us
            info about your company and country</p>
        </div>
      </div>
    </div>
    <b-alert class="position-absolute w-50 right-0 bottom-0"
        :show="dismissCountDown"
        dismissible
        :variant="status"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
      <p> Request {{ status }} This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
      ></b-progress>
    </b-alert>
  </div>


</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

input {
  order: 1;
  margin-bottom: 0;

  &:focus {
    color: #fff;

    & ~ .label {
      color: #fff;
    }

    & ~ hr {
      background-color: #fff;
    }
  }
}

.text-animation {
  overflow: hidden;
  margin: 0 auto;
  animation: typing 3.5s steps(30, end), blink-caret .5s step-end;

  @keyframes typing {
    from {
      width: 0;
      white-space: nowrap;
    }
    to {
      width: 100%;
      white-space: normal;
    }
  }
}

</style>

<script>

import axios from 'axios';

export default {
  name: "contact-form",
  data() {
    return {
      errors: {
        name: '',
        phone: '',
        email: '',
      },
      name: '',
      phone: '',
      email: '',
      buttonDisabled: true,
      checked: false,
      loading: false,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      status: ''
    }
  },
  methods: {
    checkForm: function () {
      this.errors = {};
      this.errors.name = this.validName(this.name);
      this.errors.phone = this.validPhone(this.phone);
      this.errors.email = this.validEmail(this.email);
      if (!this.errors.name?.length && !this.errors.phone?.length && !this.errors.email?.length && this.checked) {
        this.loading = true;
        axios.post('http://httpbin.org/post)', {
          name: this.name,
          phone: this.phone,
          email: this.email
        }).then((res) => {
          console.log(res);
          this.status = 'success';
          this.dismissCountDown = this.dismissSecs;
        }).catch(err => {
          this.loading = false;
          if (err.response) {
            this.status = 'danger';
            this.dismissCountDown = this.dismissSecs
          } else if (err.request) {
            this.status = 'danger';
            this.dismissCountDown = this.dismissSecs
          }
        });
        return true;
      }
    },
    checkField: function (field, value) {
      switch (field) {
        case 'name':
          this.errors.name = this.validName(value);
          break;
        case 'phone':
          this.errors.phone = this.validPhone(value);
          break;
        case 'email':
          this.errors.email = this.validEmail(value);
          break;
      }
    },
    validName: function (name) {
      return !name ? 'Please enter your name' : null;
    },
    validPhone: function (phone) {
      return !phone ? 'Please enter your phone number' : null;
    },
    validEmail: function (email) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!email) {
        return 'Please enter your email address';
      }
      return pattern.test(email) ? null : 'Email address is invalid';
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
  }
}
</script>
