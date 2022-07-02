<template>
  <navbar></navbar>
  <router-view/>
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

a{
  font-weight: bold;
}
</style>
