<template>
  <main class="app">
    <SidebarComponent />
    <TopbarComponent />
    <router-view class="view" />
  </main>
</template>

<style>
.app {
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: var(--background-2);
}

.view {
  margin-right: 24px;
  border-radius: var(--border-radius-l) var(--border-radius-l) 0 0;
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  overflow-y: auto;
}

/* Medium screen (640px - 1024px) */
@media screen and (min-width: 641px) and (max-width: 1024px) {
  .view{
    margin-right: 16px;
  }

}

/* Small screen (< 640px) */
@media screen and (max-width: 640px) {
  .app {
    grid-template-columns: 1fr;
    height: auto;
  }
  .view{
    margin: 0px;
    padding: 24px 16px;
  }
}
</style>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
import TopbarComponent from '@/components/TopbarComponent.vue'

export default {
  name: 'App',
  components: {
    SidebarComponent,
    TopbarComponent
  }
}
</script>

<style>
@import '@/assets/style.css';
</style>
