<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid" id="navbar">
      <a class="navbar-brand" href="#">Einundzwanzig</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/">Game</router-link>
          <router-link class="nav-link" to="/about">Spielregeln</router-link>
          <router-link class="nav-link" to="/users">Users</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav-bar'
}
</script>

<style scoped>
.nav-link2{
  padding: 8px 50px;
}
</style>
