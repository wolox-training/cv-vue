<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2C3E50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    color: #2C3E50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42B983;
    }
  }
}

</style>
