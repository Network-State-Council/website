<template>
  <button :class="bemm('', ['', isActive ? 'active' : 'inactive'])" @click="handleClick()">
    <span :class="bemm('line', ['', 'first'])"></span>
    <span :class="bemm('line', ['', 'middle'])"></span>
    <span :class="bemm('line', ['', 'last'])"></span>
  </button>
</template>


<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('navigation-trigger');
import { EventAction, eventBus, EventChannel, type EventData } from "~/utils/eventBus";

const isActive = ref(false);

const handleClick = () => {
  isActive.value = !isActive.value;

  eventBus.emit(EventChannel.UI, {
    action: isActive.value ? EventAction.OPEN : EventAction.CLOSE,
    payload: isActive.value
  })
}
onMounted(() => {
  eventBus.on(EventChannel.UI, (p: any) => {
    const payload = p as unknown as EventData;
    if (payload.action === EventAction.CLOSE) {
      isActive.value = false;
    }
    if (payload.action === EventAction.OPEN) {
      isActive.value = true;
    }
  })
})
</script>

<style lang="scss">
.navigation-trigger {
  $b: &;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2em;
  height: 2em;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 10;
  transition: transform 0.2s;

  &__line {
    width: 100%;
    height: 0.25em;
    background-color: var(--foreground);
    transition: transform 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;

    --line-gap: 0.66em;

    &--first {
      transform: translateY(calc((var(--line-gap) * -1) - 50%)) translateX(-50%);
    }

    &--middle {
      transform: translateY(calc(0em - 50%)) translateX(-50%);
      ;
    }

    &--last {
      transform: translateY(calc((var(--line-gap)) - 50%)) translateX(-50%);
      ;
    }
  }

  &--inactive {
    &:hover {
      #{$b}__line--first {
        transform: translateY(calc((var(--line-gap) * -1) - 100%)) translateX(-50%);
      }

      #{$b}__line--last {
        transform: translateY(calc((var(--line-gap)) - 0%)) translateX(-50%);
      }
    }
  }

  &--active {
    transform: rotate(90deg);

    #{$b}__line--first {
      transform: translateY(calc(0em - 50%)) translateX(-50%) rotate(45deg) scale(0.75, .75);
    }

    #{$b}__line--middle {
      transform: translateY(calc(0em - 50%)) translateX(-50%) scale(0, 1);
      ;
    }

    #{$b}__line--last {
      transform: translateY(calc(0em - 50%)) translateX(-50%) rotate(-45deg) scale(0.75, .75);
      ;
    }
  }
}
</style>
