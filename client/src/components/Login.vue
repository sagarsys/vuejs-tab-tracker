<template>
  <v-container>
    <v-layout row>
      <v-flex md8 lg6 offset-md2 offset-lg3>
        <panel title="Login">
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
            <div class="error white--text py-4 mt-4 mb-2" v-if="error" v-html="error"></div>
            <v-btn dark class="cyan my-4" @click="login">Login</v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'

  export default {
    name: 'Login',
    components: {
      Panel
    },
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login() {
        this.error = null
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
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
