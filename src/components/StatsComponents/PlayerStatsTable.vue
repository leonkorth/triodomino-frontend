<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Spiele</th>
        <th scope="col">Siege</th>
        <th scope="col">Gewinnwahrscheinlichkeit</th>
        <th scope="col">Ø Punkte pro Spiel</th>
        <th scope="col">Ø Gezogen pro Spiel</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player,index) in this.players" :key="player.id">
        <th scope="row">{{index + 1}}</th>
        <td>{{ capitalizeFirstLetter(player.name)}}</td>
        <td>{{player.gamesCount}}</td>
        <td>
          <span v-if="player.gamesCount > 0">{{ player.victories }} </span>
          <span v-if="player.gamesCount < 1"> - </span>
        </td>
        <td>
          <span v-if="player.gamesCount > 0">{{(player.victories / player.gamesCount) * 100}} %</span>
          <span v-if="player.gamesCount < 1"> - </span>
        </td>
        <td>
          <span v-if="player.gamesCount > 0">{{player.totalPoints / player.gamesCount}}</span>
          <span v-if="player.gamesCount < 1">-</span>
        </td>
        <td>
          <span v-if="player.gamesCount > 0">{{player.draws / player.gamesCount}}</span>
          <span v-if="player.gamesCount < 1"> - </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PlayerStatsTable',
  props: ['players'],
  methods: {
    capitalizeFirstLetter (string) {
      return string?.charAt(0).toUpperCase() + string?.slice(1)
    }
  }
}
</script>

<style scoped>

</style>
