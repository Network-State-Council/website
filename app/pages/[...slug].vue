<template>
  <main :class="bemm()">
    <div class="content-page">
      <ContentDoc />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm('content');
</script>
