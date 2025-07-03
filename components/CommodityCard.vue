<template>
  <NuxtLink class="flex flex-col gap-3">
    <div class="w-full h-[298px] overflow-hidden rounded-xl">
      <NuxtPicture
        :src="item.image"
        class="w-full h-full object-cover"
        :alt="item.title"
        :imgAttrs="{
          class: 'w-full h-full object-cover',
          style: 'display: block',
          'data-my-data': 'my-value'
        }"
      />
    </div>
    <div class="flex flex-col xs:flex-row justify-between gap-3">
      <h2 class="text-3xl">{{ item.title }}</h2>
      <div
        class="space-y-1 bg-secondary text-secondary-foreground py-6 px-5.5 rounded-xl xs:space-y-2 xs:max-w-[300px]">
        <p
          v-for="(spec, i) in item.specs"
          :key="i"
          class="text-xs"
        >
          {{ spec }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    title: string
    image: string
    specs: string[]
  }
}>()
</script>
