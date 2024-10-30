<template>
  <article :class="bemm()">

    <slot></slot>
  </article>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('card');

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style lang="scss">

.card{
  padding: var(--space);
  background-color: var(--background);
  color: var(--foreground);
  border-radius: var(--border-radius);
  display: flex; flex-direction: column; gap: var(--space);
}

</style>
