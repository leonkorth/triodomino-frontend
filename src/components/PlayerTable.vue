<template>
  <div class="container">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Geschlecht</th>
        <th scope="col">Punkte</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player,index) in this.players" :key="player.id">
        <th scope="row">{{index + 1}}</th>
        <td>{{player.name}}</td>
        <td>
          <span v-if="player.gender === 'FEMALE'">W</span>
          <span v-else-if="player.gender === 'MALE'">M</span>
        </td>
        <td>0</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PlayerTable',
  props: ['players']
}
</script>

<style scoped>

</style>
