<template lang="pug">
  .home-container
    .navbar-container
      .icon-container
        img.wolox-icon-small(src='../assets/wolox_logo.svg' alt='Wolox logo')
        p.icon-title
          | BOOKS
      span.logout
        | Logout
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped lang="scss">
@import 'src/scss/colors';
@import 'src/scss/fonts';
@import 'src/scss/commons/images';

.navbar-container {
  align-items: center;
  background-color: $white;
  border-top: 5px solid $cerulean;
  box-shadow: 0 2px 4px 0 $box-shadow-navbar;
  display: flex;
  height: 100%;
  justify-content: space-around;
  max-height: 60px;;
}

.icon-container {
  align-items: center;
  display: flex;
  flex-direction: column;
};

.logout,
.icon-title {
  color: $black;
  font-size: $navbar-icon-title;
  font-weight: bold;
}

.logout {
  cursor: pointer;
  font-size: $navbar-item;
}

.home-container {
  background-color: $wild-sand;
  height: 100vh;
  width: 100%;
}

</style>
