<template>
  <v-app id="app">
    <main>
      <v-container fluid>
        <v-content app>
          <app-header />
          <router-view/>
        </v-content>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Header.vue';

export default {
  name: 'App',
  components: { AppHeader },
  comments: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
