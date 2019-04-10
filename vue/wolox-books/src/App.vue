<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/sign_up">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'src/scss/colors';

  #nav {
    padding: 30px;
    text-align: center;
    a {
      color: $pickled-bluewood;
      font-weight: bold;
      &.router-link-exact-active {
        color: $ocean-green;
      }
    }
  }
</style>
