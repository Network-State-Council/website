<template>
  <div ref="countUpRef">{{ currentNumber }}</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  targetNumber: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  reset: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const currentNumber = ref(0);
const countUpRef = ref<HTMLElement | null>(null);
let interval: ReturnType<typeof setInterval> | null = null;


const startCounting = () => {
  const totalFrames = props.duration / (1000 / 60);
  const increment = Math.ceil(props.targetNumber / totalFrames);
  interval = setInterval(() => {
    if (currentNumber.value < props.targetNumber) {
      currentNumber.value += increment;
      if (currentNumber.value >= props.targetNumber) {
        currentNumber.value = props.targetNumber;
        clearInterval(interval!);
      }
    }
  }, 1000 / 60);
};

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting();
    } else if (props.reset) {
      clearInterval(interval!);
      currentNumber.value = 0;
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  if (countUpRef.value) {
    observer.observe(countUpRef.value);
  }
});

watch(() => props.targetNumber, () => {
  currentNumber.value = 0;
  startCounting();
});
</script>

<style scoped>
div {
  font-variant-numeric: tabular-nums;

}
</style>
