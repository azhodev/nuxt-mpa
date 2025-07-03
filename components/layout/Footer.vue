<script setup>
import ContactsLinks from '../contact/ContactLinks.vue';

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

<template>
    <div class="bg-secondary text-secondary-foreground pl-[12%] sm:pl-0">
        <div class="container grid sm:grid-cols-2 md:grid-cols-3 gap-9 md:gap-5 pb-20 md:pb-9 pt-9">
            <NuxtLink to="/" class="row-span-2 md:row-span-1">
                <NuxtImg
                    src="/logo.png"
                    width="138"
                    height="86"
                />
            </NuxtLink>

            <Navigation class="flex flex-col gap-2" link-class="text-xl hover:scale-105 transition-transform duration-75" />
            
            <div class="flex flex-col items-start gap-3">
                <h3 class="font-bold">Contact</h3>
                <ContactLinks :contacts="contacts" class="flex-col gap-3" />
                <FeedbackDrawer>
                  <UiButton class="btn mt-3 text-2xl">contact us</UiButton>
                </FeedbackDrawer>
            </div>
        </div>
    </div>
</template>