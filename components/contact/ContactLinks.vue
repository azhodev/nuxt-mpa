<script setup lang="ts">
defineProps<{
  contacts: {
    href: string
    icon: string
    label: string
  }[]
  wrapperClass?: string
  linkClass?: string
  iconClass?: string
  labelClass?: string
}>()
</script>

<template>
  <div :class="wrapperClass ?? 'flex'">
    <a
      v-for="(item, index) in contacts"
      :key="index"
      :href="item.href"
      :class="linkClass ?? 'flex gap-3 items-center text-lg'"
      target="_blank"
      rel="noopener"
    >
      <NuxtImg
        :src="item.icon"
        :class="iconClass ?? 'w-6 h-6'"
        width="24"
        height="24"
        :alt="item.label"
      />
      <span :class="labelClass">{{ item.label }}</span>
    </a>
  </div>
</template>
