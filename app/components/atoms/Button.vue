<template>
  <component :is="componentElement" :class="buttonClasses" @click="$emit('click')">
    <span :class="bemm('icon')" v-if="icon">
      <Icon :name="icon"></Icon>
    </span>
    <span :class="bemm('text')">
      <slot></slot>
    </span>
  </component>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import type { Icons } from "open-icon";
import type { PropType } from "vue";
import Icon from "./Icon.vue";
const bemm = useBemm('button');

const props = defineProps({
  element: {
    type: String,
    default: 'button'
  },
  color: {
    type: String,
    default: 'accent'
  },
  icon: {
    type: String as PropType<Icons>,
    default: ''
  }
})

const componentElement = computed(() => {
  return props.element
})

const buttonClasses = computed(()=>{
  return [
    bemm(),
    bemm('',props.color)
  ]
})
</script>

<style lang="scss">
.button {
  display: inline-block;
  padding: var(--space);
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--button-background-color, var(--accent));
  color: var(--button-text-color, var(--foreground));
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .2s;

  display: flex;
  align-items: center;
  gap: var(--space-s);

  &__icon{
    line-height: 1;
    font-size: 1.5em;
  }

  &:hover {
    background-color: var(--button-background-color--hover, var(--accent-dark));
  }

  $colors: ('primary','secondary','tertiary','quaternary');

  @each $color in $colors{
    &--#{$color}{
     --button-background-color: #{color-mix(in srgb, var(--#{$color}), var(--background) 40%)};
     --button-text-color: #{color-mix(srgb, var(--#{$color}), var(--foreground) 60%)};
    --button-background-color--hover: #{color-mix(in srgb, var(--#{$color}), var(--background) 30%)};
    --button-text-color--hover: #{color-mix(srgb, var(--#{$color}), var(--foreground) 70%)};
    }
  }

}
</style>
