<template lang="pug">
  .register-container
    form(class="form-container")
      img(alt="Vue logo" src="../assets/wolox_logo.svg" class="wolox-icon")
      p(class="title-form")
        |{{title}}
      InputText(v-for="(field, index) in fields"
        :name="field.name"
        :label="field.label"
        :key="index"
      )

</template>

<script>
// @ is an alias to /src
import InputText from '@/components/InputText.vue'

export default {
  name: 'register',
  components: {
    InputText
  },
  data () {
    return {
      fields: [
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
      ],
      title: 'BOOKS'
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/colors';
  @import 'src/scss/fonts';

  .register-container {
    align-content: center;
    display: flex;
    height: 100%;
    justify-content: center;
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
    background-color: $wild-sand;
    border-top: 5px solid $cerulean;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 600px;
    max-width: 400px;
    width: 100%;
  }

</style>
