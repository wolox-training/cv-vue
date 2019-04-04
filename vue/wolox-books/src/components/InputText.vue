<template lang='pug'>
  .input-text-container
    label(class='input-text-label' :for='name')
      |{{ label }}
    input(class='input-text-content' :id='name')
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
  @import 'src/scss/fonts';
  @import 'src/scss/colors';

  .input-text-container {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 70px;
    justify-content: space-around;
    margin: 10px auto;
  }

  .input-text-label {
    color: $black;
    font-size: $input-text;
    font-weight: 500;
    margin-left: 10px;
  }

  .input-text-content {
    border-radius: 10px;
    height: 40px;
    width: 350px;
  }

</style>
