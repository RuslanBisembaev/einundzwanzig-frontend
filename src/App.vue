<template>
  <navbar></navbar>
  <router-view/>
  <iframe></iframe>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Nav-bar',
  components: { Navbar }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
