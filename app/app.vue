<template>
  <NuxtLayout :class="bemm()">
    <NuxtPage />
  </NuxtLayout>
</template>


<script lang="ts" setup>
import { useBemm } from 'bemm';
import { useUI } from '@/composables/useUI';
import { setDataBodyAttribute, removeDataBodyAttribute } from './utils/html';

const bemm = useBemm('app');
const route = useRoute();
const { colorMode, contrastMode, fontSize, scrollDirection, isOnTop } = useUI();

const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
	 window.scrollTo(0, 0)
})

watch(
	() => [colorMode.value, contrastMode.value, fontSize.value],
	() => {
		if (import.meta.client) {
			document.body.setAttribute('data-color-mode', colorMode.value);
			document.body.setAttribute('data-font-size', fontSize.value);
			contrastMode.value
				? document.body.setAttribute('data-contrast-mode', 'true')
				: document.body.removeAttribute('data-contrast-mode');
		}
	},
	{ immediate: true },
);

watch(() => [scrollDirection.value, isOnTop.value], () => {
	scrollDirection.value && setDataBodyAttribute('scroll-direction', scrollDirection.value);
	if (isOnTop.value) {
		setDataBodyAttribute('on-top');
		removeDataBodyAttribute('off-top');
	}
	else {
		setDataBodyAttribute('off-top');
		removeDataBodyAttribute('on-top');
	}
}, { immediate: true });

const appClasses = computed(() => {
	return [bemm('', [
	]), `page-${route.name as string}`];
});

</script>
