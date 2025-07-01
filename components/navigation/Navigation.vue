<!-- components/navigation/navigation.vue -->
<script setup>
import { MENU_DATA } from '~/data/menu';

const props = defineProps({
  wrapperClass: { type: String, default: '' },
  linkClass: { type: String, default: '' }
})
</script>


<template>
  <nav :class="wrapperClass">
    <NuxtLink
      v-for="link in MENU_DATA"
      :key="link.to"
      :to="link.to"
      :class="linkClass"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>
