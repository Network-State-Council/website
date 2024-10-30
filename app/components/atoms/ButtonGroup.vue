<template>
  <div :class="blockClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('button-group');

const props = defineProps({
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  }
})

const blockClasses = computed(() => {
  return [bemm(), bemm('', props.align)]
})
</script>


<style lang="scss">
.button-group {
  display: flex;
  gap: var(--space);

  .button {
    margin: 0;
  }

  &--left {
    justify-content: flex-start;
  }

  &--right {
    justify-content: flex-end;
  }

  &--center {
    justify-content: center;
  }
}
</style>
