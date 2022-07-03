<template>
<h1><u>Rangliste</u></h1>

  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col"><u>id</u></th>
      <th scope="col" id="username"><u>username</u></th>
      <th scope="col" id="coins"><u>coins</u></th>
      <th scope="col" id="wins"><u>wins</u></th>
      <th scope="col" id="losses"><u>losses</u></th>
      <th scope="col" id="draws"><u>draws</u></th>
    </tr>
    </thead>
    <tbody>
      <tr class="col" v-for="user in tableSort()" :key="user.id">
        <th scope="row">{{user.id}}</th>
        <td>{{ user.username }}</td>
        <td>{{ user.coins }}</td>
        <td>{{ user.wins }}</td>
        <td>{{ user.losses }}</td>
        <td>{{ user.draws }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsersView',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(user => {
        this.users.push(user)
      }))
      .catch(error => console.log('error', error))
    document.getElementById('username').addEventListener('click', this.tableSortUsername)
    document.getElementById('coins').addEventListener('click', this.tableSortCoins)
    document.getElementById('wins').addEventListener('click', this.tableSortWins)
    document.getElementById('losses').addEventListener('click', this.tableSortLosses)
    document.getElementById('draws').addEventListener('click', this.tableSortDraws)
  },
  methods: {
    tableSort () {
      return this.users
    },
    tableSortUsername () {
      return this.users.sort(function (a, b) { return a.username.toLowerCase().localeCompare(b.username.toLowerCase()) })
    },
    tableSortCoins () {
      return this.users.sort(function (a, b) { return b.coins - a.coins })
    },
    tableSortWins () {
      return this.users.sort(function (a, b) { return b.wins - a.wins })
    },
    tableSortLosses () {
      return this.users.sort(function (a, b) { return b.losses - a.losses })
    },
    tableSortDraws () {
      return this.users.sort(function (a, b) { return b.draws - a.draws })
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: black;
  color: white;
  margin: auto;
}
</style>
