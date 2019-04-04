<template lang='pug'>
  .input-text-container
    label(class='input-text-label' :for='name')
      |{{ label }}
    input(class='input-text-content' :id='name' @input='handleInput' v-model='value' )
</template>

<script>
export default {
  name: 'InputText',
  data () {
    return {
      value: null
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput () {
      return this.$emit('input', this.value)
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
    color: $cod-gray;
    font-size: $input-text;
    font-weight: 500;
    margin-left: 10px;
  }

  .input-text-content {
    border-radius: 10px;
    height: 40px;
    padding: 0 5px;
    width: 350px;
  }

</style>
