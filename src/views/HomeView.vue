<template>
  <h2>Bankier: <span id = "dealer"></span></h2>
  <div id="dealer-cards">
    <img src="src/assets/cards/herzDame.png" >
  </div>

  <h2>Meine Karten: <span id ="you"></span></h2>
  <div id="your-cards"></div>

  <br>
  <button id="hit">hit</button>
  <button id="stay">stay</button>
  <p id="results"></p>
</template>

<script>

</script>

<style>
#dealer-cards img{
  height: 175px;
  width: 125px;
  margin: 1px;
}

#your-cards img{
  height: 175px;
  width: 125px;
  margin: 1px;
}
</style>
