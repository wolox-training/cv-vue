<template lang="pug">
  .base-layout-container
    img.wolox-image(alt='Wolox logo' src='../assets/wolox_logo.svg')
    form.base-form-container(@submit.prevent="onSubmit()")
      p.base-form-title
        | {{ labels.title }}
      .input-text-container(
        v-for='(field, index) in fields'
        :class='{ "input-text-error" : $v.login[field.name].$error }'
        :key='index')
          label.input-text-label(:for='field.name')
            | {{ field.label }}
          input.input-text-content(:id='field.name' v-model='login[field.name]' )
          p.field-error(v-show='$v.login[field.name].$error')
            | {{ showError($v.login[field.name]) }}
      p.field-error(v-show='error')
        | {{ error }}
      button.base-form-button
        | {{ labels.signIn }}
    .container-button
      router-link.base-form-button.link-form(to="/sign_up")
        | {{ labels.signUp }}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

import { getError } from '@/utils/generalFunctions'
import AuthService from '@/services/AuthService'

import { labels, loginFieldsArray } from './constants'

export default {
  name: 'login',
  props: {
    fields: {
      type: Array,
      default: () => loginFieldsArray
    },
    labels: {
      type: Object,
      default: () => labels
    }
  },
  data () {
    return {
      login: {},
      error: ''
    }
  },
  validations: {
    login: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    showError (vueInst) {
      return getError(vueInst)
    },
    onSubmit () {
      this.$v.login.$touch()
      if (!this.$v.login.$error) {
        const loginData = { session: { ...this.login } }
        AuthService.login(loginData)
          .then(response => {
            if (response.ok) {
              window.localStorage.setItem('token', response.data.access_token)
              this.$router.push('/')
              console.log(this.$router, 'router')
            } else {
              this.error = response.data.error
            }
          })
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
