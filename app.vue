<script setup>
import AppLoader from './components/AppLoader.vue';
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'

</script>

<template>
  <AppLoader />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
  <Toaster />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>