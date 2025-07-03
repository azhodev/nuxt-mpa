<script setup lang="ts">
defineProps<{
  colorClass?: string
}>()

const isOpen = useState("burgerOpen", () => false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <button aria-label="Toggle menu" @click="toggleMenu" class="z-50 relative w-10 h-10">
    <div class="relative w-full h-full">
      <!-- Line 1 -->
      <span
        :class="[
          'absolute w-full h-[5px] rounded-full transition-all duration-200 ease-in-out',
          colorClass || 'bg-accent',
          isOpen
            ? 'top-1/2 -translate-x-1/2 translate-y-0 rotate-45'
            : 'top-[25%] -translate-x-1/2 -translate-y-1/2 rotate-0',
          'left-1/2'
        ]"
      />
      <!-- Line 2 -->
      <span
        :class="[
          'absolute w-full h-[5px] rounded-full transition-all duration-200 ease-in-out',
          colorClass || 'bg-accent',
          isOpen ? 'opacity-0' : 'opacity-100',
          'top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2'
        ]"
      />
      <!-- Line 3 -->
      <span
        :class="[
          'absolute w-full h-[5px] rounded-full transition-all duration-200 ease-in-out',
          colorClass || 'bg-accent',
          isOpen
            ? 'top-1/2 -translate-x-1/2 -translate-y-0 -rotate-45'
            : 'top-[75%] -translate-x-1/2 -translate-y-1/2 rotate-0',
          'left-1/2'
        ]"
      />
    </div>
  </button>
</template>
