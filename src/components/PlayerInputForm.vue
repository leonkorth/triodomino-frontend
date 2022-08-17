<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-4">
          <div class="form-floating">
            <input type="text" class="form-control" id="floatingInputGrid" placeholder="Neuen Spieler hinzufügen...">
            <label for="floatingInputGrid">Neuen Spieler hinzufügen</label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-floating">
            <select class="form-select" id="floatingSelectGrid">
              <option selected disabled>Spieler auswählen</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="col-2">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PlayerInputForm'
}
</script>

<style scoped>

</style>
