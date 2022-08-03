<template>
<h1>Home</h1>
  <div class="container">
    <h2>Willkommen zum Triodomino!</h2>
  </div>
  <div class="container">
    <img src="../assets/tri-logo.jpeg"  class="tri-logo" alt="EEEE">
  </div>
  <RegelnCanvas></RegelnCanvas>

</template>

<script>
import RegelnCanvas from '@/components/RegelnCanvas'
export default {
  name: 'HomeView',
  components: { RegelnCanvas }
}
</script>

<style scoped>

</style>
