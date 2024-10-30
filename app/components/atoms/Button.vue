<template>
  <component :is="componentElement" :class="bemm()" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('button');

const props = defineProps({
  element: {
    type: String,
    default: 'button'
  }
})

const componentElement = computed(() => {
  return props.element
})
</script>

<style lang="scss">
.button {
  display: inline-block;
  padding: var(--space);
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--accent);
  color: var(--foreground);
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .2s;
  &:hover {
    background-color: var(--accent-dark);
  }
}
</style>
