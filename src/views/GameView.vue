<template>
<h1>Spiel</h1>
<player-input-form></player-input-form>
  <div class="container">
    <button type="button" class="btn btn-primary">Spiel starten</button>
  </div>


</template>

<script>
import PlayerInputForm from '@/components/GameComponents/PlayerInputForm'
export default {
  name: 'GameView',
  components: { PlayerInputForm }
}
</script>

<style scoped>

</style>
