<template>
    <v-toolbar fixed dark class="cyan">
      <v-toolbar-title class="mr-4">
        <v-btn large flat cyan to="/">Tab Tracker</v-btn>
      </v-toolbar-title>
      <!-- TODO: Implement main menu -->
      <!--<v-toolbar-items>-->
        <!--<v-btn flat>Browse</v-btn>-->
      <!--</v-toolbar-items>-->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="navigateTo({name: 'login'})">Sign In</v-btn>
        <v-btn flat @click="navigateTo({name: 'register'})">Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
	export default {
		name: 'AppHeader',
    methods: {
		  navigateTo(route) {
		    this.$router.push(route);
      }
    }
	}
</script>

<style scoped>

</style>
