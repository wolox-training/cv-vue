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
    p(
      class='field-error'
      v-show='error')
        |{{ getError(vuelidateProperties) }}
</template>

<script>
import { dictionary } from '@/utils/generalFunctions.js'

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
    },
    getError () {
      const fieldsErrors = Object.keys(this.vuelidateProperties.$params)
      if (fieldsErrors.length) {
        for (const fieldError of fieldsErrors) {
          if (!this.vuelidateProperties[fieldError]) {
            return dictionary(fieldError)
          }
        }
      }
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

  .input-text-error {
    .input-text-label {
      color: $torch-red;
    }

    .input-text-content {
      border: 0.5px solid $torch-red;
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

  .field-error {
    color: $torch-red;
    font-size: 12px;
    margin-left: 15px;
  }

</style>
