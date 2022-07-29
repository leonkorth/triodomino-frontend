<template>
  <navbar></navbar>
  <router-view/>
</template>



<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navbar {
  padding: 30px;
  color: #1cff00;
}
#nav a {
  font-weight: bold;
  color: #1cff00;
}


</style>
