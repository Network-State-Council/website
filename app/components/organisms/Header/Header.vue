<template>
  <header :class="bemm()">

    <NuxtLink :to="{ name: 'index' }" :class="bemm('logo')">
      <Logo :inline="isMobile" />
    </NuxtLink>
    <NavigationTrigger v-if="isMobile" />
    <Navigation v-if="!isMobile" />
    <MobileNavigation v-if="isMobile" />
  </header>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import NavigationTrigger from "@/components/organisms/Navigation/NavigationTrigger.vue";
import Navigation from '@/components/organisms/Navigation/Navigation.vue';
import Logo from "@/components/atoms/Logo.vue";
import MobileNavigation from "../Navigation/MobileNavigation.vue";
const bemm = useBemm('header');

import { useUI } from "~/composables/useUI";
const { isMobile } = useUI();
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
  z-index: 10;

  @media (max-width: 768px) {
    backdrop-filter: blur(10px);
    background-color: color-mix(in srgb, var(--background), transparent 50%);
  }
  &__logo {
    width: 8em;
    flex-shrink: 0;
  }
}
</style>
