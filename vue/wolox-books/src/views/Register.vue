<template lang='pug'>
  .base-layout-container
    img.wolox-image(alt='Wolox logo' src='../assets/wolox_logo.svg')
    form.base-form-container(@submit.prevent="onSubmit()")
      p.base-form-title
        | {{ labels.title }}
      .input-text-container(
        v-for='(field, index) in fields'
        :class='{ "input-text-error" : $v.user[field.name].$error }'
        :key='index')
          label.input-text-label(:for='field.name')
            | {{ field.label }}
          input.input-text-content(:id='field.name' v-model='user[field.name]' )
          p.field-error(v-show='$v.user[field.name].$error')
            | {{ showError($v.user[field.name]) }}
      p.field-error(v-show='error')
        | {{ error }}
      button.base-form-button
        | {{ labels.signUp }}
    .container-button
      router-link.base-form-button.link-form(:to='routes.login')
        | {{ labels.signIn }}
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

import { PasswordValidator } from '@/utils/customValidator'
import { getError } from '@/utils/generalFunctions'
import AuthService from '@/services/AuthService'
import { setToken } from '@/services/LocalStorageService'

import { labels, registerFieldsArray } from './constants'
import routes from '../routes'

export default {
  name: 'register',
  props: {
    fields: {
      type: Array,
      default: () => registerFieldsArray
    },
    labels: {
      type: Object,
      default: () => labels
    },
    routes: {
      type: Object,
      default: () => routes
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
        AuthService.register(userData)
          .then(response => {
            if (response.data.error) {
              this.error = response.data.error[0]
            } else {
              setToken(response.data.acccess_token)
              this.goLogin()
            }
          })
      }
    },
    showError (vueInst) {
      return getError(vueInst)
    },
    goLogin () {
      this.$router.push(routes.login)
    }
  }
}
</script>

<style scoped lang='scss'>
@import 'src/scss/commons/form';
@import 'src/scss/commons/images';
@import 'src/scss/commons/input_label_error';
@import 'src/scss/commons/links';

.container-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
