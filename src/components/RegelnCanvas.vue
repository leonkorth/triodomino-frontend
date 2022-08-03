<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightRegeln" aria-controls="offcanvasRight">Zu den Regeln:</button>

  <div class="container" id="regeln-canvas">
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightRegeln" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <RegelnText></RegelnText>
      </div>
    </div>
  </div>


</template>

<script>
import RegelnText from '@/components/RegelnText'
export default {
  name: 'RegelnCanvas',
  components: { RegelnText }
}
</script>

<style scoped>
#offcanvasRightRegeln{
width: 600px;
}
</style>
