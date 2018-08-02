<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '../services/AuthenticationService';

  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register() {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      }
    }
  }
</script>

<style scoped>

</style>
