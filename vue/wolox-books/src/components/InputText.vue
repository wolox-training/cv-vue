<template lang="pug">
    label(class="input-text-label")
      |{{label}}
      input(class="input-text-content")
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: String,
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/scss/fonts';

  .input-text-label {
    font-size: $input-text;
    font-weight: bold;
  }

  .input-text-content {
    border-radius: 50px;
    height: 50px;
    width: 300px;
  }

</style>
