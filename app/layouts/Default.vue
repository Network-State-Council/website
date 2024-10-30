<template>
  <div class="default-layout">

    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/organisms/Header/Header.vue'
import Footer from '@/components/organisms/Footer/Footer.vue'
</script>

<style lang="scss">
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  .header {
    flex-shrink: 0;
  }

  main {
    // padding: var(--spacing);
  }

  .footer {
    flex-shrink: 0;
  }
}
</style>
