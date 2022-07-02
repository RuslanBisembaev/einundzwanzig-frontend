<template>
<h1><u>Ranking</u></h1>

  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col"><u>#</u></th>
      <th scope="col"><u>username</u></th>
      <th scope="col"><u>coins</u></th>
      <th scope="col"><u>wins</u></th>
      <th scope="col"><u>losses</u></th>
      <th scope="col"><u>draws</u></th>
    </tr>
    </thead>
    <tbody>
      <tr class="col" v-for="user in users" :key="user.id">
        <th scope="row">{{ users.length }}</th>
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
