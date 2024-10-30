<template>

<div :class="bemm()">


  <Intro></Intro>
  <Values></Values>
  <States></States>
  <HowItWorks></HowItWorks>
  <Join></Join>
</div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';

import Intro from '@/components/sections/Intro.vue';
import Values from '@/components/sections/Values.vue';
import States from '@/components/sections/States.vue';
import Join from '@/components/sections/Join.vue';
import HowItWorks from '@/components/sections/HowItWorks.vue';


const bemm = useBemm('index');
</script>

