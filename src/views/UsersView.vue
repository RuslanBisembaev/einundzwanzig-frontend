<template>
<h1>User list</h1>

  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">username</th>
      <th scope="col">coins</th>
      <th scope="col">wins</th>
      <th scope="col">losses</th>
      <th scope="col">draws</th>
    </tr>
    </thead>
    <tbody>
      <tr class="col" v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
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
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://einund20.herokuapp.com/api/v1/users', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(user => {
        this.users.push(user)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
