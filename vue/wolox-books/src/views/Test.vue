<template>
  <div class="form pt-6">
    <div class="summary text-red" v-if="$v.form.$error">
      Form has errors
    </div>
    <form @submit.prevent="submit">
      <div class="flex justify-center my-6">
        <div
           class="px-4"
           :class="{ 'hasError': $v.form.name.$error }">
          <label class="mr-2 font-bold text-grey">Name</label>
          <input type="text" class="input" v-model="form.name">
        </div>
        <div 
          class="px-4"
          :class="{ 'hasError': $v.form.email.$error }">
          <label class="mr-2 font-bold text-grey">Email</label>
          <input type="email" class="input" v-model="form.email">
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="button">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormComponent",

  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },

  validations: {
    form: {
      name: { required, min: minLength(10) },
      email: { required, email }
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      if(this.$v.form.$error) return
      // to form submit after this
      alert('Form submitted')
    }
  }
};
</script>


<style scoped lang='scss'>
#app {
  color: #2C3E50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-top: 20px;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.input {
  background-color: #F7F7F7;
  border: 1px solid rgb(199, 199, 199);
  border-radius: 2px;
  padding: 0.3rem 0.5rem;
  .hasError & {
    border-color: red;
  }
}

.hasError label {
  color: red;
}

.button {
  background: #3AB409;
  border-bottom: 2px solid #2E9106;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    background: #2E9107;
    border-bottom: 2px solid #226906;
  }
}

</style>
