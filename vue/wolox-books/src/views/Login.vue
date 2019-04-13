<template lang="pug">
  .base-layout-container
    img.wolox-image(alt='Wolox logo' src='../assets/wolox_logo.svg')
    .base-form-container
      h1.base-form-title
        | Login
      router-link.base-form-button.link-sign-up(to='/sign_up')
        | Sign up
</template>

<script>

export default {
  name: 'login'
}
</script>

<style scoped lang="scss">
@import 'src/scss/commons/form';
@import 'src/scss/commons/images';

.login-container {
  display: flex;
  flex-direction: column;
}

.link-sign-up {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
