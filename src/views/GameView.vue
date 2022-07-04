<template>
  <div id="game" style="display: inline">
    <h3>Bankier: <span id = "dealer-total"></span></h3>
    <div id="dealer-cards">
      <img id="hidden" style="display: inline" src="cards/cardBack.png">
    </div>

    <h3 id="myCards">Meine Karten: <span id ="your-total"></span></h3>
    <div id="your-cards"></div>

    <br>
    <button id="hit" style="display:inline">hit</button>
    <button id="stand" style="display:inline">stand</button>
    <p id="results" style="display: none"></p>
    <p><button id="playAgain" style="display: none">Play again</button></p></div>
</template>

<script>
export default {
  name: 'GameView',
  data () {
    return {
      dealerTotal: 0,
      yourTotal: 0,
      hidden: undefined,
      deck: [],
      canHit: true,
      element: undefined
    }
  },
  mounted () {
    this.buildDeck()
    this.shuffleDeck()
    this.startGame()
  },
  methods: {
    buildDeck () {
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Bube', 'Dame', 'King', 'Ace']
      const types = ['herz-', 'pik-', 'karo-', 'kreuz-']
      for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
          this.deck.push(types[i] + values[j])
        }
      }
    },
    shuffleDeck () {
      for (let i = 0; i < this.deck.length; i++) {
        const j = Math.floor(Math.random() * this.deck.length)
        const temp = this.deck[i]
        this.deck[i] = this.deck[j]
        this.deck[j] = temp
      }
    },
    startGame () {
      for (let i = 0; i < 2; i++) {
        const cardImg = document.createElement('img')
        const card = this.deck.pop()
        cardImg.src = 'cards/' + card + '.png'
        this.yourTotal += this.getValue(card)
        document.getElementById('your-cards').append(cardImg)
      }
      document.getElementById('stand').addEventListener('click', this.stand)
      document.getElementById('hit').addEventListener('click', this.hit)
    },
    stand () {
      this.hide()
      this.hidden = this.deck.pop()
      this.dealerTotal += this.getValue(this.hidden)
      while (this.dealerTotal < 17) {
        const cardImg = document.createElement('img')
        const card = this.deck.pop()
        cardImg.src = 'cards/' + card + '.png'
        this.dealerTotal += this.getValue(card)
        document.getElementById('dealer-cards').append(cardImg)
      }
      document.getElementById('hidden').src = 'cards/' + this.hidden + '.png'
      let message = ''
      if (this.yourTotal > 21) {
        message = 'Du hast verloren!'
      } else if (this.dealerTotal > 21) {
        message = 'Du hast gewonnen!'
      } else if (this.yourTotal === this.dealerTotal) {
        message = 'Unentschieden!'
      } else if (this.yourTotal > this.dealerTotal) {
        message = 'Du hast gewonnen!'
      } else if (this.yourTotal < this.dealerTotal) {
        message = 'Du hast verloren!'
      }
      document.getElementById('dealer-total').innerText = this.dealerTotal
      document.getElementById('your-total').innerText = this.yourTotal
      document.getElementById('results').innerText = message
      document.getElementById('results').style.display = 'inline'
    },
    hit () {
      if (!this.canHit) {
        return
      }
      const cardImg = document.createElement('img')
      const card = this.deck.pop()
      cardImg.src = 'cards/' + card + '.png'
      this.yourTotal += this.getValue(card)
      document.getElementById('your-cards').append(cardImg)

      if (this.yourTotal > 20) {
        this.canHit = false
      }
    },
    getValue (card) {
      const data = card.split('-')
      const value = data[1]

      if (isNaN(value)) {
        if (value === 'Ace') {
          return 11
        }
        return 10
      }
      return parseInt(value)
    },
    hide () {
      this.element = document.getElementById('hit')
      if (this.element.style.display !== 'none') {
        this.element.style.display = 'none'
      }
      this.element = document.getElementById('stand')
      if (this.element.style.display !== 'none') {
        this.element.style.display = 'none'
      }
      this.element = document.getElementById('playAgain')
      if (this.element.style.display === 'none') {
        this.element.style.display = 'inline'
      }
      document.getElementById('playAgain').addEventListener('click', this.playAgain)
    },
    playAgain () {
      location.reload()
    },
    createUser () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        username: 'Beta',
        coins: 0,
        wins: 0,
        losses: 0,
        draws: 0
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style>

#myCards {
  padding-top: 20px;
}

#dealer-cards img{
  height: 160px;
  width: 125px;
  margin: 5px;
}

#your-cards img{
  height: 160px;
  width: 125px;
  margin: 5px;
}

#hit {
  width: 100px;
  height: 50px;
  font-size: 20px;
  background-color: green;
}

#stand {
  width: 100px;
  height: 50px;
  font-size: 20px;
  background-color: red;
}
#results {
  font-weight: bold;
}
#playAgain {
  background-color: lightgrey;
}
</style>
