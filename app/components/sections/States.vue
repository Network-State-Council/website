<template>
  <section :class="bemm()">
    <div class="section-content">
      <Icon :name="Icons.STAR_L"></Icon>
      <h2>Verified Network States</h2>
      <p>A list of verified network states and where they are located. Click on them to get more info about each.</p>
      <Button color="secondary">More info</Button>

      <div :class="bemm('states')">
        <ul :class="bemm('states-list')">
          <li :class="bemm('state')">
            Hi
          </li>
          <li :class="bemm('state')">
            Hi
          </li>
          <li :class="bemm('state')">
            Hi
          </li>
          <li :class="bemm('state')">
            Hi
          </li>
          <li :class="bemm('state')">
            Hi
          </li>
          <li :class="bemm('state')">
            Hi
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';
import { useBemm } from 'bemm';
import { Icons } from 'open-icon';

const bemm = useBemm('states');
</script>

<style lang="scss">
.states {
  background-color: var(--secondary);
  padding: var(--spacing);

  h2 {
    font-size: var(--h2-font-size);
    line-height: 1;
  }

  &__states {
    height: 200vh;
    overflow: visible;
    view-timeline-name: --gallery;
    view-timeline-axis: block;
  }

  &__states-list {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 250vmax;
    will-change: transform;
    animation: linear move forwards;
    animation-timeline: --gallery;
    animation-range: contain 0% contain 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: var(--spacing);
    gap:var(--spacing);

  }

  @keyframes move {
    100% {
      transform: translate(calc(-100% - 100vw));
      left: 0;
    }
  }

  &__state {
    background-color: var(--foreground);
    color: var(--background);
    padding: var(--spacing);
    border-radius: var(--border-radius);
    width: 100%;
    height: calc(var(--spacing) * 10);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--h2-font-size);
    line-height: 1;
  }
}
</style>
