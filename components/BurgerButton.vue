<script setup lang="ts">
const props = defineProps<{
  colorClass?: string
}>()

const isOpen = useState("burgerOpen", () => false)

// Общие классы для всех линий
const baseLineClass = 'absolute w-full h-[5px] rounded-full transition-all duration-200 ease-in-out left-1/2'

// Вычисляемые классы для каждой линии
const line1Class = computed(() => [
  baseLineClass,
  props.colorClass || 'bg-accent',
  isOpen.value
    ? 'top-1/2 -translate-x-1/2 translate-y-0 rotate-45'
    : 'top-[25%] -translate-x-1/2 -translate-y-1/2 rotate-0',
])

const line2Class = computed(() => [
  baseLineClass,
  props.colorClass || 'bg-accent',
  'top-1/2 -translate-x-1/2 -translate-y-1/2',
  isOpen.value ? 'opacity-0' : 'opacity-100',
])

const line3Class = computed(() => [
  baseLineClass,
  props.colorClass || 'bg-accent',
  isOpen.value
    ? 'top-1/2 -translate-x-1/2 -translate-y-0 -rotate-45'
    : 'top-[75%] -translate-x-1/2 -translate-y-1/2 rotate-0',
])

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <button
    aria-label="Toggle menu"
    class="z-50 relative w-10 h-10"
    @click="toggleMenu"
  >
    <div class="relative w-full h-full">
      <span :class="line1Class" />
      <span :class="line2Class" />
      <span :class="line3Class" />
    </div>
  </button>
</template>
