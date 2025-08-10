<script setup>
import ContactsLinks from '../ContactLinks.vue';

const contacts = [
  {
    href: 'https://maps.app.goo.gl/mpgCeMgPmyRobu726',
    icon: '/icons/map.webp',
    label: 'Dubai Head office',
  },
  {
    href: 'https://t.me/avazmore',
    icon: '/icons/telegram.webp',
    label: 'Telegram',
  },
  {
    href: 'https://t.me/avazmore',
    icon: '/icons/whatsapp.webp',
    label: 'Watsapp',
  },
]
</script>

<template>
  <div class="bg-secondary text-secondary-foreground pl-[12%] sm:pl-0">
    <div class="container grid sm:grid-cols-2 md:grid-cols-3 gap-9 md:gap-5 pb-20 md:pb-9 pt-9">
      <NuxtLink
        to="/"
        class="row-span-2 md:row-span-1"
      >
        <NuxtPicture
          src="/logo.webp"
          width="138"
          height="86"
          alt="Logo Icon"
          format="avif,webp,jpg,png"
          sizes="sm:100vw md:50vw lg:800px"
          class="rounded-lg"
        />

      </NuxtLink>

      <Navigation
        class="flex flex-col gap-2"
        link-class="text-xl hover:scale-105 transition-transform duration-75"
      />

      <div class="flex flex-col items-start gap-3">
        <h3 class="font-bold">Contact</h3>
        <ContactLinks
          :contacts="contacts"
          class="flex-col gap-3"
        />
        <ContactDrawer>
          <UiButton class="btn mt-3 text-md">contact us</UiButton>
        </ContactDrawer>
      </div>
    </div>
  </div>
</template>