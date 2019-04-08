<template lang='pug'>
  .register-container
    img.wolox-icon(alt='Vue logo' src='../assets/wolox_logo.svg')
    form.form-container(@submit.prevent="onSubmit")
      p.title-form
        |{{labels.title}}
      input-text(v-for='(field, index) in fields'
        :name='field.name'
        :label='field.label'
        :key='index'
        v-model='user[field.name]'
      )
      main-btn(:label='labels.singUp')
    main-btn(:label='labels.singIn' class='login-button')
</template>

<script>
import InputText from '@/components/InputText.vue'
import MainBtn from '@/components/MainButton.vue'

const fieldsArray = [
  {
    name: 'fisrtName',
    label: 'First name'
  },
  {
    name: 'lastName',
    label: 'Last name'
  },
  {
    name: 'email',
    label: 'Email'
  },
  {
    name: 'password',
    label: 'Password'
  }
]

const labels = {
  title: 'BOOKS',
  singUp: 'Sing up',
  singIn: 'Login'
}

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
  components: {
    InputText,
    MainBtn
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user, 'user info')
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

</style>
