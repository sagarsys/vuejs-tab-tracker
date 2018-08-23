<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>

    <div class="px-4 py-2 mt-4">
      <slot>
        No slot defined.
      </slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'Panel',
    props: [
      'title'
    ]
	}
</script>

<style scoped>

</style>
