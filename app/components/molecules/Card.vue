<template>
  <article :class="blockClasses" :style="`--card-color: var(--${color})`">

    <slot></slot>
  </article>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { AllColors } from "~/data/ui";
const bemm = useBemm('card');

const props = defineProps({
  color: {
    type: String as PropType<AllColors>,
    default: AllColors.BACKGROUND,
  }
})

const blockClasses = computed(() => {
  return [bemm(), bemm('', props.color)]
})
</script>

<style lang="scss">
.card {
  padding: var(--space);
  background-color: var(--card-background,var(--background));
  color: var(--foreground);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: var(--space);

  --card-background: color-mix(in srgb, var(--card-color), transparent 60%);


}
</style>
