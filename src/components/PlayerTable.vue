<template>

  <div class="container">
    <table class="table table-hover" id="all-players-table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player, index) in this.players" :key="player.id">
        <th scope="row"> {{index + 1}}</th>
        <td>{{ capitalizeFirstLetter(player.name) }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'PlayerTable',
  props: ['players'],
  methods: {
    capitalizeFirstLetter (string) {
      return string?.charAt(0).toUpperCase() + string?.slice(1)
    }
  }
}
</script>

<style scoped>
  #all-players-table{
    width: 30%;
  }
</style>
