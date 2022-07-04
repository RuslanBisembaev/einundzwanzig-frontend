<template>
  <div id="game">
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
    <p><button id="playAgain" style="display: none">Play again</button>
    <button id="saveStats" style="display: none">Save stats</button></p>
  </div>
</template>

<script>
export default {
  name: 'GameView',
  data () {
    return {
      coins: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      dealerTotal: 0,
      yourTotal: 0,
      hidden: undefined,
      deck: [],
      canHit: true,
      element: undefined,
      secondRound: false
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
      this.yourTotal = 0
      this.dealerTotal = 0
      for (let i = 0; i < 2; i++) {
        const cardImg = document.createElement('img')
        const card = this.deck.pop()
        cardImg.src = 'cards/' + card + '.png'
        this.yourTotal += this.getValue(card)
        document.getElementById('your-cards').append(cardImg)
      }
      document.getElementById('stand').addEventListener('click', this.stand)
      document.getElementById('hit').addEventListener('click', this.hit)
      if (this.secondRound) {
        this.showMessages()
      }
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
      this.showMessages()
    },
    showMessages () {
      document.getElementById('hidden').src = 'cards/' + this.hidden + '.png'
      let message = ''
      if (this.yourTotal > 21) {
        message = 'Du hast verloren!'
        this.coins = this.coins - 50
        this.losses++
      } else if (this.dealerTotal > 21) {
        message = 'Du hast gewonnen!'
        this.coins = this.coins + 50
        this.wins++
      } else if (this.yourTotal === this.dealerTotal) {
        message = 'Unentschieden!'
        this.draws++
      } else if (this.yourTotal > this.dealerTotal) {
        message = 'Du hast gewonnen!'
        this.coins = this.coins + 50
        this.wins++
      } else if (this.yourTotal < this.dealerTotal) {
        message = 'Du hast verloren!'
        this.coins = this.coins - 50
        this.losses++
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
      this.element = document.getElementById('saveStats')
      if (this.element.style.display === 'none') {
        this.element.style.display = 'inline'
      }
      document.getElementById('playAgain').addEventListener('click', this.playAgain)
      document.getElementById('saveStats').addEventListener('click', this.createUser)
    },
    playAgain () {
      document.getElementById('results').style.display = 'none'
      this.canHit = true
      this.secondRound = true
      this.deck = []
      const cardImg = document.createElement('img')
      cardImg.src = 'cards/cardBack.png'

      document.getElementById('dealer-total').innerText = this.dealerTotal
      document.getElementById('your-total').innerText = this.yourTotal
      document.getElementById('your-cards').innerText = ''
      document.getElementById('dealer-cards').innerText = ''
      document.getElementById('dealer-cards').append(cardImg)
      if (document.getElementById('hit').style.display === 'none') {
        document.getElementById('hit').style.display = 'inline'
      }
      if (document.getElementById('stand').style.display === 'none') {
        document.getElementById('stand').style.display = 'inline'
      }
      if (document.getElementById('playAgain').style.display === 'inline') {
        document.getElementById('playAgain').style.display = 'none'
      }
      if (document.getElementById('saveStats').style.display === 'inline') {
        document.getElementById('saveStats').style.display = 'none'
      }
      this.buildDeck()
      this.shuffleDeck()
      this.startGame()
    },
    createUser () {
      const datum = new Date()
      const hours = datum.getTime().toString().slice(8)
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        username: 'Player' + hours,
        coins: this.coins,
        wins: this.wins,
        losses: this.losses,
        draws: this.draws
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
#start {
  bottom: 500px;
  background-color: green;
  color: white;
  font-weight: bold;
  height: 70px;
  width: 80px;
}

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
#saveStats {
  background-color: lightgrey;
}
</style>
