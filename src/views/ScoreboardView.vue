<template>
<h1>Scoreboard</h1>
  <h3>Alle Spieler:</h3>
  <PlayerTable :players=this.playerStats></PlayerTable>
  <div id="loading-progress-scoreboard" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
import PlayerTable from '@/components/PlayerTable'
export default {
  name: 'ScoreboardView',
  components: { PlayerTable },
  data () {
    return {
      loaded: false,
      players: [],
      playerStats: []
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
    },
    getStatsForAllPlayers () {
      this.makeLoadingButtonVisble()
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/stats/players'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint,requestOptions)
        .then(response => response.json())
        .then(result => {
          this.playerStats = result
          this.makeLoadingButtonInvisble()
        })
        .catch(error => console.log('error', error))
    },
    makeLoadingButtonVisble () {
      document.getElementById("loading-progress-scoreboard").classList.remove('invisible')
      document.getElementById("loading-progress-scoreboard").classList.add('visible')
    },
    makeLoadingButtonInvisble () {
      document.getElementById('loading-progress-scoreboard').classList.remove('visible')
      document.getElementById('loading-progress-scoreboard').classList.add('invisible')
    }
  },
  mounted () {
    this.getPlayers()
    this.getStatsForAllPlayers()
  }
}


</script>

<style scoped>

</style>
