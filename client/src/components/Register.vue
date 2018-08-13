<template>
  <v-container>
    <v-layout column>
      <v-flex xs6>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <div class="px-4 py-2 mt-4">
            <v-text-field
              type="email"
              v-model="email"
              label="Email"
              placeholder="Email"
              class="my-2 pa-2"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              label="Password"
              placeholder="Password"
              class="my-2 pa-2"
            ></v-text-field>
            <br>
            <div class="error white--text py-4 mt-4 mb-2" v-if="error" v-html="error"></div>
            <v-btn class="cyan white--text my-4" @click="register">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService';

  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register() {
        this.error = null;
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          });
        }
        catch ( error ) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style scoped>

  input {
    width: 100%;
    max-width: 300px;
  }

</style>
