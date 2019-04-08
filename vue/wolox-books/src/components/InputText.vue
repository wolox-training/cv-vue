<template lang='pug'>
  .input-text-container(:class='{ "input-text-error" : error }')
    label(
      class='input-text-label'
      :for='name')
        |{{ label }}
    input(
      class='input-text-content'
      :id='name'
      @input='handleInput'
      v-model='value' )
    p(v-show='error')
      |error
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
    },
    error: {
      type: Boolean,
      default: false
    },
    vuelidateProperties: {
      type: Object
    }
  },
  methods: {
    handleInput () {
      return this.$emit('input', this.value)
    }
  },
  mounted: function () {
    console.log(this.vuelidateProperties, 'mounted')
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

  .input-text-error {
    .input-text-label {
      color: $crimson;
    }

    .input-text-content {
      border: 1px solid $crimson;
    }
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
