<template lang="pug">
  .fields-container
    InputText(v-for="(field, index) in fields"
    :name="field.name"
    :label="field.label"
    :key="index"
    )
</template>

<script>
// @ is an alias to /src
import InputText from '@/components/InputText.vue'

export default {
  name: 'register',
  components: {
    InputText
  },
  data () {
    return {
      fields: [
        {
          name: 'fisrtName',
          label: 'First Name'
        },
        {
          name: 'lastName',
          label: 'Last Name'
        },
        {
          name: 'email',
          label: 'Email'
        },
        {
          name: 'password',
          label: 'Password'
        }
      ]
    }
  }
}
</script>
