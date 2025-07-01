<!-- components/ContactLinks.vue -->
<template>
  <div class="flex flex-col gap-3">
    <a
      v-for="(item, index) in contacts"
      :key="index"
      :href="item.href"
      class="flex gap-3 items-center text-lg"
      target="_blank"
      rel="noopener"
    >
      <NuxtImg
        :src="item.icon"
        width="24"
        height="24"
        alt=""
      />
      {{ item.label }}
    </a>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  {
    href: 'https://maps.app.goo.gl/mpgCeMgPmyRobu726',
    icon: '/icons/map.png',
    label: 'Dubai Head office',
  },
  {
    href: 'https://t.me/avazmore',
    icon: '/icons/telegram.png',
    label: 'Telegram',
  },
  {
    href: 'https://t.me/avazmore',
    icon: '/icons/whatsapp.png',
    label: 'Watsapp',
  },
]
</script>
