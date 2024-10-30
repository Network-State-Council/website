<template>
  <footer :class="bemm()">
    <NuxtLink :to="{ name: 'index' }" :class="bemm('logo')">
      <Logo :inline="true" />
    </NuxtLink>

    <nav :class="bemm('navigation')">
      <ul :class="bemm('list')" v-for="column in menu.columns" :key="column.label">
        <h5 :class="bemm('label')">{{ column.label }}</h5>
        <li :class="bemm('navigation')" v-for="item in column.items" :key="item.name">
          <NuxtLink :class="bemm('link')" :to="item.path" href="/">
            <span :class="bemm('text')">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import Logo from "@/components/atoms/Logo.vue";
const bemm = useBemm('footer');

const menu = {
  columns: [
    {
      label: 'Network',
      items: [
        { name: 'Network States', path: '/network-states' },
        { name: 'Members', path: '/members' },
        { name: 'About us', path: '/about-us' },
      ]
    },
    {
      label: 'Resources',
      items: [
        { name: 'Tokenomics', path: '/tokenomics' },
        { name: 'Litepaper', path: '/litepaper' },
      ]
    },
    {
      label: 'Legal',
      items: [
        { name: 'Brand Guide', path: '/brand-guide' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
      ]
    }
  ]
}

</script>

<style lang="scss">
.footer {
  padding: var(--spacing);
  border-top: 1px solid var(--accent-dark);
  display: flex;
  align-items: flex-start;
  gap: var(--space);
  justify-content: space-between;


  &__logo {
    width: 8em;
  }

  &__navigation {
    justify-content: flex-end;
    display: flex;
    gap: var(--spacing);
    flex: 1;
     @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: var(--space);
    align-items: flex-start;
    padding: 0;
    margin: 0;
    height: fit-content;




  }

  &__label {
    font-size: 1.5em;
    font-weight: 500;
    color: var(--secondary);
  }

  &__item {
  }

  &__link {
    display: block;
  }



}
</style>
