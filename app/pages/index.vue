<template>
  <section class="intro">

    <div class="content-page">
      <div class="container">
      <h1><strong>Validating</strong> and <strong>connecting</strong> the <strong>digital nations</strong> of tomorrow
      </h1>
      <p>The Network State Council serves as the premier validation authority for emerging digital nations. Through
        decentralized governance and open-source tools, we empower communities to transform from online groups into
        recognized network states.</p>
      </div>
    </div>
    <div class="background">
      <img src="/assets/images/floating-cities.png" alt="A digital world map">
    </div>
  </section>
  <section>
    <div class="content-page">
      <h2>Verified Network States</h2>
      <p>A list of verified network states and where they are located. Click on them to get more info about each.</p>
      <Button>More info</Button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Button from '@/components/atoms/Button.vue';
import { useBemm } from 'bemm';
const bemm = useBemm('index');
</script>


<style lang="scss">
.intro {
  position: relative;
  background-color: var(--secondary);
  padding: var(--spacing) 0;

  p {
    font-size: 1.5em;
  }

  .content-page {
    width: 50vw;
    z-index: 2;
    padding: 0;
    position: relative;
display: flex;
justify-content: flex-end;
transform: translateX(25vw);
    .container{
      padding: var(--spacing);
      background-color: color-mix(in srgb, var(--background), transparent 75%);
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);
    }
  }

  .background {
    &::before {
      content: "";
      width: 100%;
      height: 25%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to bottom, var(--background), transparent);
    }

    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    object-fit: cover;
    height: 100%;
    transform: translateX(-33.33%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
