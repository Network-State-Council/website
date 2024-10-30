<template>
  <nav :class="bemm('', ['', isActive ? 'active' : 'inactive'])">
    <div :class="bemm('background')" @click="handleClick"></div>
    <div :class="bemm('container')">

      <ul :class="bemm('list')">
        <li :class="bemm('item')">
          <NuxtLink :to="{ name: 'slug', params: { slug: 'network-states' } }" :class="bemm('link')">
            <span :class="bemm('text')">Network States</span>
          </NuxtLink>
        </li>
        <li :class="bemm('item')">
          <NuxtLink :to="{ name: 'slug', params: { slug: 'members' } }" :class="bemm('link')">
            <span :class="bemm('text')">Members</span>
          </NuxtLink>
        </li>
        <li :class="bemm('item')">
          <NuxtLink :to="{ name: 'slug', params: { slug: 'about-us' } }" :class="bemm('link')">
            <span :class="bemm('text')">About us</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { EventAction, eventBus, EventChannel, type EventData } from "@/utils/eventBus";
const bemm = useBemm('mobile-navigation');
const isActive = ref(false);

const router = useRouter();

watch(() => router.currentRoute.value, () => {
  if(isActive.value)  handleClick()
})

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
.mobile-navigation {
  $b: &;
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
z-index: 10;
  &--inactive {
    pointer-events:none;

    #{$b}__background {
      opacity: 0;
      pointer-events: none;
    }

    #{$b}__container {
      transform: translate(0%, 0%) scale(0.5);
      opacity: 0;
    }
  }

  &__background {
    position: absolute;
    inset: 0;
    opacity: 1;
    transition : all .3s ease-in-out;
    background-color: color-mix(in srgb, var(--foreground), transparent 50%);
  }

  &__container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    background-color: var(--background);
    transform: translate(0) scale(1);
    transition: all .3s cubic-bezier(0.6, 0.04, 0.98, 0.335);

    border-radius: var(--border-radius);
    padding: var(--spacing);
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, .1);
  }

  &__list {
    display: flex;
    justify-content: center;
    gap: var(--space);
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  &__item {
    list-style: none;
  }

  &__link {
    display: block;
    padding: var(--space);
    color: inherit;
    text-decoration: none;
    text-align: center;
    border-radius: var(--border-radius);

    // background-color: var(--accent);
    font-weight: 500;
    font-size: 1em;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(.5);
      background-color: color-mix(in srgb, var(--primary), transparent 80%);

      opacity: 0;
      transition: cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.2s;
    }


    &.router-link-active,
    &:hover {
      color: color-mix(in srgb, var(--primary), var(--foreground) 30%);

      // color: var(--primary);
      &::before {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;

      }
    }
  }

  &__text {
    color: inherit;
  }
}
</style>
