<template lang='pug'>
  .register-container
    img.wolox-icon(alt='Wolox logo' src='../assets/wolox_logo.svg')
    form.form-container(@submit.prevent="onSubmit")
      p.title-form
        |{{ labels.title }}
      .input-text-container(
        v-for='(field, index) in fields'
        :class='{ "input-text-error" : $v.user[field.name].$error }'
        :key='index')
          label.input-text-label(:for='field.name')
            |{{ field.label }}
          input.input-text-content(:id='field.name' v-model='user[field.name]' )
          p.field-error(v-show='$v.user[field.name].$error')
            |{{ getError($v.user[field.name]) }}
      button.base-form-button
        |{{ labels.signUp }}
    .container-button
      button.base-form-button.login-button
        |{{ labels.signIn }}
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

import { PasswordValidator } from '@/utils/customValidator'
import { dictionary } from '@/utils/generalFunctions'

import { labels, fieldsArray } from './constants'

export default {
  name: 'register',
  props: {
    fields: {
      type: Array,
      default: () => fieldsArray
    },
    labels: {
      type: Object,
      default: () => labels
    }
  },
  data () {
    return {
      user: {}
    }
  },
  validations: {
    user: {
      firstName: { required, min: minLength(10) },
      lastName: { required },
      email: { required, email },
      password: { required, PasswordValidator }
    }
  },
  methods: {
    onSubmit () {
      this.$v.user.$touch()
      console.log(this.user, 'user info')
    },
    getError (vuelidateProperties) {
      const fieldsErrors = Object.keys(vuelidateProperties.$params)
      if (fieldsErrors.length) {
        for (const fieldError of fieldsErrors) {
          if (!vuelidateProperties[fieldError]) {
            return dictionary[fieldError]
          }
        }
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  @import 'src/scss/colors';
  @import 'src/scss/fonts';

  .register-container {
    background-color: $wild-sand;
    border-top: 5px solid $cerulean;
    margin: 50px auto;
    max-width: 400px;
    width: 100%;
  }

  .wolox-icon {
    margin: 35px 30px 10px;
  }

  .title-form {
    color: $black;
    font-size: $title-form;
    font-weight: bold;
    letter-spacing: 5px;
    margin-bottom: 30px;
    text-align: center;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 20px;
    max-height: 600px;
    width: 100%;
  }

  .input-text-container {
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-around;
    margin: 10px auto;
  }

  .input-text-label {
    color: $cod-gray;
    font-size: $input-text;
    font-weight: 500;
    margin-left: 10px;
  }

  .input-text-content {
    border-radius: 10px;
    height: 40px;
    padding: 0 5px;
    width: 350px;
  }

  .container-button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .base-form-button {
    background-color: $atlantis;
    border-radius: 8px;
    color: $white;
    font-size: $main-button;
    height: 45px;
    margin: 10px auto;
    max-width: 350px;
    width: 100%;
  }

  .login-button {
    background-color: $wild-sand;
    border: 1px solid $atlantis;
    color: $atlantis;
    margin-bottom: 20px;
    position: relative;

    &::before {
      background-color: $alto;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      top: -20px;
      width: 100%;
    }
  }

  .input-text-error {
    .input-text-label {
      color: $torch-red;
    }

    .input-text-content {
      border: 0.5px solid $torch-red;
    }
  }

  .field-error {
    color: $torch-red;
    font-size: $field-error;
    margin-left: 15px;
  }
</style>
