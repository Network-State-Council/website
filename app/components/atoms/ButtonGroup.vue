<template>
  <div :class="bemm()">

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('button-group');
</script>


<style lang="scss">
.button-group {
  display: flex;
  gap: var(--space);
  justify-content: center;
  .button{margin: 0; }
}
</style>
