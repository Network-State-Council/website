<template>
  <header :class="bemm()">

    <NuxtLink :to="{ name: 'index' }" :class="bemm('logo')">
      <Logo />
    </NuxtLink>
    <Navigation />
  </header>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import Navigation from '@/components/organisms/Navigation/Navigation.vue';
import Logo from "@/components/atoms/Logo.vue";
const bemm = useBemm('header');
</script>


<style lang="scss">
.header {
  padding: var(--space) var(--spacing);
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
color: var(--foreground);
  &__logo {
    width: 8em;
    flex-shrink: 0;
  }
}
</style>
