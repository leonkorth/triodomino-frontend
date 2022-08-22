<template>
  <div class="container">
  <div class="row justify-content-start container" >

      <div class="col-lg-4 my-1">
        <form id="player-input-form" class="needs-validation">
          <div>
            <div>
              <div class="form-floating" >
                <input v-model="playerTextInput" type="text" class="form-control" id="floatingInputGrid" placeholder="Neuen Spieler hinzufügen..." required>
                <label  for="floatingInputGrid">Neuen Spieler hinzufügen</label>
                <div class="invalid-feedback">
                  Bitte geben Sie dem Spieler einen Namen mit mind. 3 Zeichen!
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center container">
            <div class="col-lg-4 my-1">
              <button type="button" class="btn btn-primary" @click="saveNewPlayer()">Hinzufügen</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-4 my-1">
        <form>
          <div>
            <div>
              <div class="form-floating">
                <select v-model="playerSelectInput" class="form-select" id="floatingSelectGridPlayerInputForm">
                  <option class="text-center"  value="" selected disabled>Spieler auswählen</option>
                  <option v-for="player in filterPlayersWhoAreAlreadyChosen()" :key="player.id" :value="{id: player.id, name: player.name}">
                    {{ capitalizeFirstLetter(player.name) }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="row justify-content-center container">
            <div class="col-lg-4 my-1">
              <button type="button" class="btn btn-primary" @click="saveSelectedPlayer()">Hinzufügen</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>





      <div class="container d-flex justify-content-start">
        <h3>Alle Spieler:</h3>
      </div>
      <div class="d-flex justify-content-start">
        <PlayerTable :players="this.players"></PlayerTable>
      </div>
      <div class="container d-flex justify-content-start">
        <h3>Ausgewählte Spieler:</h3>
      </div>
      <div class="d-flex justify-content-start">
        <PlayerTable :players="this.chosenPlayers"></PlayerTable>
      </div>

</template>

<script>
import PlayerTable from '@/components/GameComponents/PlayerTable'
export default {
  name: 'PlayerInputForm',
  components: { PlayerTable },
  data () {
    return {
      players: [],
      chosenPlayers: [],
      playerTextInput: '',
      playerSelectInput: ''
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
    saveNewPlayer () {


      if(this.validate() && !this.isPlayerNameAlreadyUsed(this.playerTextInput) && this.playerTextInput.trim().length > 3){

        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/players'
        const data = {
          name: this.playerTextInput.toLowerCase().trim()
        }
        const requestOptions = {
          method: 'POST',
          redirect: 'follow',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
        fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data)

            // location.reload()

            this.players.push(data)
            this.chosenPlayers.push(data)
            this.playerTextInput = ''


          })
          .catch(error => console.log('error', error))
      } else console.error('Fehler beim Hinzufügen des Spielers!')




    },
  validate () {
    const form = document.getElementById('player-input-form')
    form.classList.add('was-validated')
    return form.checkValidity()
  },
    isPlayerNameAlreadyUsed (playerName) {

      return this.players.map(player => player.name.toLowerCase().trim()).includes(playerName.toLowerCase().trim())

    },
    filterPlayersWhoAreAlreadyChosen () {

      const newList = []

      this.players.forEach(
        player => {
           if(!this.chosenPlayers.map(player => player.name).includes(player.name)) newList.push(player)
        }
      )
      return newList
    },
    saveSelectedPlayer () {

      this.chosenPlayers.push(this.playerSelectInput)
      const element = document.getElementById('floatingSelectGridPlayerInputForm')
      element.value = ''
    },
    capitalizeFirstLetter (string) {
      return string?.charAt(0).toUpperCase() + string?.slice(1)
    }

  },
  mounted () {
    this.getPlayers()
  }
}
</script>

<style scoped>

</style>
