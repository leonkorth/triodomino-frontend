<template>
<h1>Scoreboard</h1>
  <h3>Alle Spieler:</h3>
  <PlayerTable :players=this.players></PlayerTable>
</template>

<script>
import PlayerTable from '@/components/PlayerTable'
export default {
  name: 'ScoreboardView',
  components: { PlayerTable },
  data () {
    return {
      loaded: false,
      players: []
    }
  },
  methods: {
    getPlayers () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/players'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => {
          result.forEach(player => {
            this.players.push(player)
          })
        })
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    this.getPlayers()
  }
}


</script>

<style scoped>

</style>
