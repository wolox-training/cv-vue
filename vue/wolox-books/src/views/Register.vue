<template lang='pug'>
  .base-layout-container
    img.wolox-image(alt='Wolox logo' src='../assets/wolox_logo.svg')
    form.base-form-container(@submit.prevent="onSubmit")
      p.base-form-title
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
      p.field-error(v-show='error')
        |{{ error }}
      button.base-form-button
        |{{ labels.signUp }}
    .container-button
      button.base-form-button.login-button(
        @click='goLogin'
      )
        |{{ labels.signIn }}
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import { PasswordValidator } from '@/utils/customValidator'
import { dictionary } from '@/utils/generalFunctions'
import BookService from '@/services/BookService'

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
      user: {},
      error: ''
    }
  },
  validations: {
    user: {
      first_name: { required, min: minLength(10) },
      last_name: { required },
      email: { required, email },
      password: { required, PasswordValidator },
      password_confirmation: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    onSubmit () {
      this.$v.user.$touch()
      if (!this.$v.user.$error) {
        const userData = { user: { ...this.user, locale: 'es' } }
        BookService.register(userData).then(response => {
          if (response.data.error.length) {
            this.error = response.data.error[0]
          } else {
            this.goLogin()
          }
        })
      }
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
    },
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang='scss'>
  @import 'src/scss/colors';
  @import 'src/scss/fonts';
  @import 'src/scss/commons/form';
  @import 'src/scss/commons/images';

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
