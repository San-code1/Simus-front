<template>
  <main>
    <h1 class="display-m">Facilities</h1>
    <div class="grid-cards">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  </main>
</template>

<script>

import CardComponent from '@/components/CardComponent.vue'

export default {
  name: 'App',
  components: {
    CardComponent
  }
}
</script>

<style>
.grid-cards {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(352px, 1fr));
  gap: 24px;
  width: 100%;
}


/* Small screen (< 640px) */
@media screen and (max-width: 640px) {
  .grid-cards {
    grid-template-columns: repeat(auto-fit, minmax(328px, 1fr));
  }
}
</style>