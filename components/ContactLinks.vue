<script setup lang="ts">
import type { Contact } from '~/types/contacts';
const props = defineProps<{
  contacts: Contact[]
  wrapperClass?: string
  linkClass?: string
  iconClass?: string
  labelClass?: string
}>()
</script>

<template>
  <div :class="props.wrapperClass ?? 'flex'">
    <a
      v-for="(item, index) in props.contacts"
      :key="index"
      :href="item.href"
      :class="props.linkClass ?? 'flex gap-3 items-center text-lg'"
      target="_blank"
      rel="noopener"
    >
      <NuxtPicture
        :src="item.icon"
        :class="props.iconClass ?? 'w-6 h-6'"
        width="24"
        height="24"
        alt=""
        format="avif,webp,jpg"
        sizes="sm:100vw md:50vw lg:800px"
      />

      <span :class="props.labelClass">{{ item.label }}</span>
    </a>
  </div>
</template>
