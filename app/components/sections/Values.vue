<template>
  <section :class="bemm()">
    <div class="section-content">
      <CardGroup :align="'center'">
        <Card :color="Colors.PRIMARY">
          <div :class="bemm('card-icon')">
            <Icon :class="bemm('icon')" :name="Icons.FILE_CHECK2" />
          </div>
          <h2>Validation</h2>
          <p>Build trust and legitimacy through our community-driven validation process.</p>
          <Button :icon="Icons.ARROW_RIGHT">More information</Button>
        </Card>

        <Card :color="Colors.SECONDARY">
          <div :class="bemm('card-icon')">
            <Icon :class="bemm('icon')" :name="Icons.BOOKCASE" />
          </div>
          <h2>Tools & Resources</h2>
          <p>Access the infrastructure and resources you need to govern and grow your network state.</p>
          <Button :icon="Icons.ARROW_RIGHT">More information</Button>
        </Card>

        <Card :color="Colors.TERTIARY">
          <div :class="bemm('card-icon')">
            <Icon :class="bemm('icon')" :name="Icons.USER_GROUP" />
          </div>
          <h2>Community</h2>
          <p>Join a thriving ecosystem of network states sharing knowledge and resources.</p>
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
import { Colors } from '~/data/ui';

const bemm = useBemm('values');
</script>

<style lang="scss">
.values {
  position: relative;
  z-index: 2;
  background-color: color-mix(in srgb, var(--secondary), transparent 90%);

  backdrop-filter: blur(5px);

  .card {

    @keyframes cardIn {
      0% {
        transform: translateY(var(--from, 50%));
      }
    }

    @keyframes cardOut {
      100% {
        transform: translateY(calc(var(--from) * -1));

      }
    }

    animation: cardIn linear forwards,    cardOut linear forwards;
    animation-timeline: view();
    animation-range: entry 50%, exit;

    &:nth-child(1){
    --from: 50%;

    }

    &:nth-child(2){
      --from: 75%;

    }

    &:nth-child(3){
      --from: 100%;

    }

    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-range: entry #{$i * 5%} exit;
      }
    }



  }

  &__card-icon {
    background-color: var(--card-color);
    border-radius: var(--border-radius);
    padding: var(--space);
    width: fit-content;
    margin: auto;
margin-top: -3em;

--icon-fill: var(--background);
    .icon {
      font-size: 6em;
    }
  }

  h2 {
    text-align: center;
  }

}
</style>
