<template>
  <div :class="blockClasses">

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('card-group');

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  align: {
    type: String,
    default: 'start'
  },
  direction: {
    type: String,
    default: 'row'
  }

})

const blockClasses = computed(()=>{
  return [
    bemm(),
    bemm('',props.color),
    bemm('',props.align),
    bemm('',props.direction),
  ]
})

</script>


<style lang="scss">
.card-group {
  display: flex;
  gap: var(--space);

  &--start{
    justify-content: flex-start;
  }
  &--center{
    justify-content: center;
  }
  &--end{
    justify-content: flex-end;
  }

  &--row{
    flex-direction: row;
  }

  @media (max-width: 768px){
    &--row{
      flex-direction: column;
    }
  }

}
</style>
