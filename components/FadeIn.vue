<script setup lang="ts">
const props = defineProps<{
  delay?: number
  class?: string
}>()

// Деструктурируем, если нужно
const { delay = 0, class: className = '' } = props
</script>

<template>
  <div
    :class="[
      'opacity-0 translate-y-5 animate-fade-in',
      className
    ]"
    :style="{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }"
  >
    <slot />
  </div>
</template>


<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
</style>
