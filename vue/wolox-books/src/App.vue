<template lang='pug'>
  #app
    .nav
      router-link.link(to="/login")
        | Login |
      router-link.link(to="/sign_up")
        | Register
    router-view
</template>

<style lang="scss">
@import 'src/scss/colors';

.nav {
  padding: 30px;
  text-align: center;

  .link {
    color: $pickled-bluewood;
    font-weight: bold;

    &.router-link-exact-active {
      color: $ocean-green;
    }
  }
}
</style>
