<script >
import { store } from "./components/data/store"

import AppHeader from "./components/AppHeader.vue"
import AppCards from "./components/AppCards.vue"
export default {
  name: "App",
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  components: {
    AppHeader, AppCards
  },


}
</script>

<template>
  <app-header></app-header>
  <app-cards></app-cards>
</template>

<style >

</style>
