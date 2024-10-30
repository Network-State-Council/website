<template>
  <div class="content-page">
    <h1>{{ formatDisplayName(city) }}</h1>
    <p class="city-location">
      Located in {{ formatDisplayName(country) }}, {{ formatDisplayName(continent) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const continent = route.params.continent as string;
const country = route.params.country as string;
const city = route.params.city as string;

// Add page metadata
useHead({
  title: `${formatDisplayName(city)} - ${formatDisplayName(country)} - ${formatDisplayName(continent)}`,
  meta: [
    {
      name: 'description',
      content: `Information about ${formatDisplayName(city)}, ${formatDisplayName(country)}`
    }
  ]
});
</script>
