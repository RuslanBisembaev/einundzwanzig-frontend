<template>
  <nav class="navbar navbar-expand-lg bg-light" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="@/assets/blackjack-logo.png"></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/">Spielregeln</router-link>
          <router-link class="nav-link" to="/game">Spiel</router-link>
          <router-link class="nav-link" to="/users">Rangliste</router-link>
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
#navbar img{
  height: 40px;
  width: 40px;
}
</style>
