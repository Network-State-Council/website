<template>
  <nav :class="bemm()">
    <ul :class="bemm('list')">
      <li :class="bemm('item')">
        <NuxtLink :to="{ name: 'slug', params: {slug: 'network-states'} }" :class="bemm('link')">
          <span :class="bemm('text')">Network States</span>
        </NuxtLink>
      </li>
      <li :class="bemm('item')">
        <NuxtLink :to="{ name: 'slug', params: {slug: 'members'} }" :class="bemm('link')">
          <span :class="bemm('text')">Members</span>
        </NuxtLink>
      </li>
      <li :class="bemm('item')">
        <NuxtLink :to="{ name: 'slug', params: {slug: 'about-us'} }" :class="bemm('link')">
          <span :class="bemm('text')">About us</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('navigation');
</script>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    justify-content: center;
    gap: var(--space)
  }

  &__item {
    list-style: none;
  }

  &__link {
    display: block;
    padding: var(--space);
    color: inherit;
    text-decoration: none;
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
