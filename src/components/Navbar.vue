<template>
  <nav class="navbar navbar-expand-lg bg-light" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="@/assets/blackjack-logo.png"></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/">Spiel</router-link>
          <router-link class="nav-link" to="/about">Spielregeln</router-link>
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
.nav-link2{
  padding: 8px 50px;
}

#navbar img{
  height: 50px;
  width: 50px;
}
</style>
