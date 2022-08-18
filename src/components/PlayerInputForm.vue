<template>
  <div class="container text-center">
    <form>
      <div class="row justify-content-start container">
        <div class="col-lg-4 my-1">
          <div class="form-floating" >
            <input type="text" class="form-control" id="floatingInputGrid" placeholder="Neuen Spieler hinzufügen...">
            <label  for="floatingInputGrid">Neuen Spieler hinzufügen</label>
          </div>
        </div>
        <div class="col-lg-4 my-1">
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid">
              <option class="text-center"  style="text-align-last: center" value="" selected disabled>Spieler auswählen</option>
              <option v-for="player in this.players" :key="player.id" :value="player.id">
                {{ player.name }}
              </option>
            </select>
          </div>
        </div>

      </div>
      <div class="row justify-content-start container">
        <div class="col-lg-4 my-1">
          <button type="submit" class="btn btn-primary">Hinzufügen</button>
        </div>
        <div class="col-lg-4 my-1">
          <button type="submit" class="btn btn-primary">Hinzufügen</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PlayerInputForm',
  data () {
    return {
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
