<script setup>
import { contactGroups } from '~/data/contactGroups'
import { Skeleton } from '@/components/ui/skeleton'
import { ref, onMounted } from 'vue'

const isMapLoaded = ref(false)
const mapError = ref(false)
const mapIframe = ref(null)

// Альтернативный вариант: проверяем готовность iframe после монтирования
onMounted(() => {
  setTimeout(() => {
    isMapLoaded.value = true
  }, 1200)
})

const offices = [
  {
    title: 'Dubai (Head office)',
    address: 'Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates',
    icon: '/icons/map-black.png'
  },
  {
    title: 'Cyprus (Branch office)',
    address: null
  },
  {
    title: 'Ukraine (Branch office)',
    address: null
  }
]

useHead({
  title: 'Contacts',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Agrofusion. Find contact details and support information.'
    }
  ]
})
</script>

<template>
  <div class="py-[60px] lg:py-[110px]">
    <div class="container grid lg:grid-cols-2 gap-5 flex-wrap">
      <div class="flex-1 shrink-0">
        <h2>Find Our Global Offices</h2>
        <p class="mt-3.5 max-w-[470px]">
          Feel free to contact us for business, careers and
          information. We look forward to hearing from you.
        </p>

        <!-- Скелетон -->
        <div class="mt-10 relative">
          <Skeleton
            v-if="!isMapLoaded"
            class="bg-gray-200 dark:bg-gray-800 w-full h-[450px] rounded-[4px] animate-pulse"
          />

          <iframe
            v-show="isMapLoaded && !mapError"
            ref="mapIframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.571716757246!2d55.792997597608576!3d25.68548832371739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef60a66a9ef3a97%3A0xda216043665fac58!2sTAG%20Middle%20East%20FZE!5e0!3m2!1sru!2s!4v1751384256539!5m2!1sru!2s"
            height="450"
            class="w-full rounded-[4px] absolute top-0 left-0"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div class="flex-1 px-9 flex flex-col gap-13">
        <section class="flex flex-col gap-5">
          <h2>Contacts</h2>
          <ContactGroupList
            :groups="contactGroups"
            item-class="flex flex-col gap-3"
            link-wrapper-class="flex gap-4"
            link-class="flex gap-1 items-center text-lg"
            icon-class="w-6 h-6"
          />
        </section>
        <section class="flex flex-col gap-5">
          <h2>Offices</h2>
          <article
            v-for="(office, i) in offices"
            :key="i"
            class="flex flex-col gap-3"
          >
            <h3>{{ office.title }}</h3>
            <div
              v-if="office.address"
              class="flex items-center gap-2"
            >
              <NuxtImg
                :src="office.icon"
                height="24"
                width="24"
                alt="Map icon"
              />
              <address class="not-italic max-w-[550px] text-xl">{{ office.address }}</address>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>