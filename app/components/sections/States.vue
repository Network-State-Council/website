<template>
 <section :class="bemm()">
    <div class="section-content">
      <Icon :name="Icons.STAR_L"></Icon>
      <h2>Verified Network States</h2>
      <p>A list of verified network states and where they are located. Click on them to get more info about each.</p>
      <Button color="secondary">More info</Button>
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

  h2{
    font-size: var(--h2-font-size);
    line-height: 1;
  }
}

</style>
