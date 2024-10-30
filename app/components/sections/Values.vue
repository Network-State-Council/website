<template>
  <section :class="bemm()">
    <div class="section-content">
      <h2>Values</h2>
      <CardGroup :align="'center'">
        <Card>
          <div :class="bemm('card-icon')">
            <Icon :class="bemm('icon')" :name="Icons.SHIELD" />
          </div>
          <h2>Validation</h2>
          <Button :icon="Icons.ARROW_RIGHT">More information</Button>
        </Card>

        <Card>
          <div :class="bemm('card-icon')">
            <Icon :class="bemm('icon')" :name="Icons.TOY_BLOCKS" />
          </div>
          <h2>Tools & Resources</h2>
          <Button :icon="Icons.ARROW_RIGHT">More information</Button>
        </Card>

        <Card>
          <div :class="bemm('card-icon')">
            <Icon :class="bemm('icon')" :name="Icons.USER_GROUP" />
          </div>
          <h2>Community</h2>
          <Button :icon="Icons.ARROW_RIGHT">More information</Button>
        </Card>
      </CardGroup>
    </div>
  </section>
</template>

<script lang="ts" setup>

import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';
import Card from '@/components/molecules/Card.vue';
import CardGroup from '@/components/molecules/CardGroup.vue';
import { useBemm } from 'bemm';
import { Icons } from 'open-icon';

const bemm = useBemm('values');
</script>

<style lang="scss">
.values {
  position: relative;
  z-index: 2;
  background-color: color-mix(in srgb, var(--secondary), transparent 90%);

  backdrop-filter: blur(5px);


  &__card-icon {
    background-color: var(--secondary);
    border-radius: var(--border-radius);
    padding: var(--space);
    width: fit-content;
    margin: auto;

    .icon {
      font-size: 6em;
    }
  }
  h2 {
    text-align: center;
  }

}
</style>
