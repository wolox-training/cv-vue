<template lang="pug">
  button(class="base-form-button")
    |{{label}}
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/scss/colors';
  @import 'src/scss/fonts';

  .base-form-button {
    background-color: $atlantis;
    border-radius: 8px;
    color: $white;
    font-size: $main-button;
    height: 45px;
    margin: 10px auto;
    max-width: 350px;
    width: 100%;
  }

</style>
