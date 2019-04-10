<template lang="pug">
  .base-layout-container
    img.wolox-image(alt='Wolox logo' src='../assets/wolox_logo.svg')
    .base-form-container
      h1.base-form-title
        |Login
      button.base-form-button(@click='goSignUp')
        |Sign up
</template>

<script>

export default {
  name: 'login',
  methods: {
    goSignUp () {
      this.$router.push('/sign_up')
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/commons/form';
  @import 'src/scss/commons/images';

  .login-container {
    display: flex;
    flex-direction: column;
  }
</style>
