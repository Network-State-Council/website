<template>
  <section :class="bemm()">
    <div class="section-content">
      <Icon :name="Icons.USER_GROUP"></Icon>
      <div class="content">
        <h2>Join the Movement</h2>
      <p>Be part of the future of digital governance. Start your journey today.</p>
      <ButtonGroup>
        <Button color="primary">Validate Your Network State</Button>
        <Button color="secondary">Join the Council</Button>
      </ButtonGroup>

      </div>
      <div :class="bemm('stats')">
        <div :class="bemm('stat')">
          <span :class="bemm('number')">{{ stats.states }}</span>
          <span :class="bemm('label')">Network States</span>
        </div>
        <div :class="bemm('stat')">
          <span :class="bemm('number')">{{ stats.members }}</span>
          <span :class="bemm('label')">Council Members</span>
        </div>
        <div :class="bemm('stat')">
          <span :class="bemm('number')">{{ stats.countries }}</span>
          <span :class="bemm('label')">Countries</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ButtonGroup from '../atoms/ButtonGroup.vue';
import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';
import { useBemm } from 'bemm';
import { Icons } from 'open-icon';
import { ref } from 'vue';

const bemm = useBemm('join-movement');

const stats = ref({
  states: 85,
  members: 124,
  countries: 32
});
</script>

<style lang="scss">
.join-movement {
  background-color: color-mix(in srgb, var(--primary), transparent 75%);
  color: var(--foreground);
  padding: var(--spacing);
  display: flex;


  h2{
    font-size: var(--h2-font-size);
  }

  .section-content {
    text-align: center;
    display: flex; flex-direction: column;
    gap: var(--spacing);
  }


  &__stats {
    display: flex;
    gap: var(--spacing);
    margin-top: var(--spacing-l);
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space);
    background-color: var(--background);
    border-radius: var(--border-radius);
  }
    &__number {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: var(--spacing-xs);
    }

    &__label {
      color: var(--text-light-secondary);
    }

}
</style>
