<template>
  <v-container>
    <v-layout row>
      <v-flex md8 lg6 offset-md2 offset-lg3>
        <panel title="Register">
            <form name="tab-tracker-register-form" autocomplete="off">
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
                autocomplete="new-password"
                class="my-2 pa-2"
              ></v-text-field>
            </form>
            <div class="error white--text py-4 mt-4 mb-2" v-if="error" v-html="error"></div>
            <v-btn dark class="cyan my-4" @click="register">Register</v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'

  export default {
    name: 'Register',
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
      async register() {
        this.error = null
        try {
          const response = await AuthenticationService.register({
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
