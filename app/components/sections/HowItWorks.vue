<template>
  <section :class="bemm()">
    <div class="section-content">
      <div class="content">
        <h2>How It Works</h2>
        <p>A simple four-step process to become a validated network state.</p>
        <Button color="secondary">Learn More</Button>
      </div>
      <div :class="bemm('steps')">
        <div :class="bemm('step')" v-for="step in steps" :key="step.title">
          <Icon :name="step.icon"></Icon>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from '@/components/atoms/Button.vue';
import Icon from '@/components/atoms/Icon.vue';
import { useBemm } from 'bemm';
import { Icons } from 'open-icon';
import { ref } from 'vue';

const bemm = useBemm('how-it-works');

const steps = ref([
  {
    icon: Icons.EDIT_M,
    title: 'Apply',
    description: 'Submit your network state for validation'
  },
  {
    icon: Icons.SHIELD,
    title: 'Get Validated',
    description: 'Meet criteria through transparent process'
  },
  {
    icon: Icons.KITCHEN_CUTLERY,
    title: 'Access Tools',
    description: 'Use our suite of governance tools'
  },
  {
    icon: Icons.USER_GROUP,
    title: 'Connect & Grow',
    description: 'Join the network state ecosystem'
  }
]);
</script>

<style lang="scss">
.how-it-works {
  background-color: color-mix(in srgb, var(--secondary), transparent 75%);
  color: var(--foreground);
  padding: var(--spacing);
  display: flex;

  h2{
  font-size: var(--h2-font-size);
  }

  .section-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  }

  &__steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing);
  }

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space);
    background-color: var(--background);
    border-radius: var(--border-radius);


    /// Css scroll animation
    view-timeline-name: --revealing-step;
    view-timeline-axis: block;
    animation: linear reveal-step both;
    animation-timeline: --revealing-step;
    animation-range: entry 0% cover 100%;
    position: relative;


    &::before{
      position: absolute; top: 0; left: 0;
      background-color: var(--secondary);
      color: var(--foreground);
      padding: var(--spacing-xs) var(--spacing-s);
      font-size: 1.5em;
      aspect-ratio: 1/1;
      width: 2em;
      line-height: 2;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 4px 4px 0 0 rgba(0,0,0,.125);

    }

    @keyframes reveal-step {
      0% {
        transform: scale(0.5) translateY(-100%);
      }

      20%,
      80% {
        transform: scale(1) translateY(0%);
        ;
      }

      100% {
        transform: scale(0.5) translateY(100%);
        ;
      }
    }


    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        &::before {
          content: "#{$i}";
        }
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .icon {
      font-size: 3em;
      color: var(--secondary);
    }

    h3 {
      margin: var(--spacing-xs) 0;
    }

    p {
      color: var(--text-secondary);
      font-size: 0.9em;
    }
  }
}
</style>
