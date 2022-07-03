<template>
  <h2>Bankier: <span id = "dealer-total"></span></h2>
  <div id="dealer-cards">
    <img id="hidden" src="cards/cardBack.png">
  </div>

  <h2>Meine Karten: <span id ="your-total"></span></h2>
  <div id="your-cards"></div>

  <br>
  <button id="hit">hit</button>
  <button id="stay">stay</button>
  <p id="results"></p>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      dealerTotal: 0,
      yourTotal: 0,
      hidden: undefined,
      deck: [],
      canHit: true
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
      console.log(this.deck)
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
      document.getElementById('stay').addEventListener('click', this.stay)
      document.getElementById('hit').addEventListener('click', this.hit)
    },
    stay () {
      this.endGame()
      const dealerTotal = this.dealerTotal
      const yourTotal = this.yourTotal
      this.canHit = false
      document.getElementById('hidden').src = 'cards/' + this.hidden + '.png'
      let message = ''
      if (yourTotal > 21) {
        message = 'Du hast verloren!'
      } else if (dealerTotal > 21) {
        message = 'Du hast gewonnen!'
      } else if (yourTotal === dealerTotal) {
        message = 'Unentschieden!'
      } else if (yourTotal > dealerTotal) {
        message = 'Du hast gewonnen!'
      } else if (yourTotal < dealerTotal) {
        message = 'Du hast verloren!'
      }
      document.getElementById('dealer-total').innerText = dealerTotal
      document.getElementById('your-total').innerText = yourTotal
      document.getElementById('results').innerText = message
    },
    endGame () {
      this.hidden = this.deck.pop()
      this.dealerTotal += this.getValue(this.hidden)
      while (this.dealerTotal < 17) {
        const cardImg = document.createElement('img')
        const card = this.deck.pop()
        cardImg.src = 'cards/' + card + '.png'
        this.dealerTotal += this.getValue(card)
        document.getElementById('dealer-cards').append(cardImg)
      }
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

      if (this.yourTotal > 21) {
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
    }
  }
}
</script>

<style>

h2 {
  padding-top: 40px;
  font-weight: 900;
}

#dealer-cards img{
  height: 175px;
  width: 125px;
  margin: 1px;
}

#your-cards img{
  height: 175px;
  width: 125px;
  margin: 5px;
}

#hit {
  width: 100px;
  height: 50px;
  font-size: 20px;
}

#stay {
  width: 100px;
  height: 50px;
  font-size: 20px;
}
</style>
