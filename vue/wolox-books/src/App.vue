<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'src/scss/colors';

#nav {
  padding: 30px;
  a {
    color: $pickled-bluewood;
    font-weight: bold;
    &.router-link-exact-active {
      color: $ocean-green;
    }
  }
}

</style>
