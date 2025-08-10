<script setup>
import { Skeleton } from '@/components/ui/skeleton'
import { ref, onMounted } from 'vue'
import TiltParagraph from '@/components/ui/TiltParagraph.vue'

useHead({
  title: 'About Us',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Agrofusion, our values, our team, and our journey in modern agriculture.'
    }
  ]
})

const imageLoaded = ref(false)
const LOADING_DELAY = 600 // Задержка в миллисекундах

onMounted(() => {
  setTimeout(() => {
    imageLoaded.value = true
  }, LOADING_DELAY)
})
</script>

<template>
  <div>
    <div class="container py-8 xs:py-22">
      <section class="relative flex flex-col gap-5">
        <div class="lg:absolute bg-secondary text-secondary-foreground py-10 px-8 max-w-150 w-full rounded-[12px]">
          <h2 class="mb-4 text-secondary-foreground">About Us</h2>
          <TiltParagraph 
            custom-class="leading-relaxed text-sm sm:text-base"
            :tilt-intensity="7"
          >
            Headquartered in Ukraine with offices in major agricultural hubs, Agrofusion is a dynamic, medium-sized
            organization dedicated to delivering customized solutions to our long-standing international clients. We
            offer
            a sophisticated and professional alternative in the ever-evolving grain market landscape.
            The core business of Agrofusion revolves around the purchase and sale of physical agricultural commodities
            such as wheat, corn, barley, and soybeans. Our expertise extends to Structured Trade Finance, Shipping, and
            Logistics. Agrofusion boasts its own origination capabilities in Ukraine and other key regions, complemented
            by strategic partnerships in several vital origination markets.
            At Agrofusion, we pride ourselves on our professionalism, flexibility, and commitment to reliability,
            ensuring
            that we meet the unique needs of each client and consistently deliver excellence in every transaction.
          </TiltParagraph>
          <ContactDrawer>
            <UiButton class="btn mt-4 bg-white text-green-800 px-4 py-2 rounded font-serif">
              Let’s Get In Touch
            </UiButton>
          </ContactDrawer>
        </div>
        <div class="max-w-[1230px] max-h-[737px] w-full h-full ml-auto mt-auto md:mt-12 rounded-[12px] overflow-hidden">
          <template  v-if="imageLoaded">
            <transition name="fade">
              <NuxtPicture
                v-if="imageLoaded"
                src="/bg-about-us.png"
                class="w-full"
                alt="Factory Image"
                format="avif,webp,jpg,png"
                width="800"
                height="600"
                sizes="sm:100vw md:50vw lg:800px"
                :img-attrs="{
                  class: 'h-full w-full object-cover',
                  style: 'display: block',
                }"
              />
            </transition>
          </template>
          <Skeleton v-else class="w-full h-[800px] bg-gray-300 dark:bg-gray-800" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  filter: blur(3px);
}
</style>