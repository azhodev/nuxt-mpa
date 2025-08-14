<script setup>
import TiltParagraph from '@/components/ui/TiltParagraph.vue'
import ImageSlider from '@/components/ui/ImageSlider.vue'

const images = [
  '/bg-about-us.png',
  '/bg-about-us-1.jpg',
  '/bg-about-us-2.jpg',
  '/bg-about-us-3.jpg'
]

useHead({
  title: 'About Us',
  meta: [
    {
      name: 'description',
      content: 'Learn more about Agrofusion, our values, our team, and our journey in modern agriculture.'
    }
  ]
})
</script>

<template>
  <div>
    <div class="container py-8 xs:py-22">
      <section class="relative flex flex-col gap-5">
        <div
          class="lg:absolute z-10 bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground py-10 px-8 max-w-150 w-full rounded-[12px]"
        >
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

        <div class="max-w-[1230px] max-h-[737px] w-full h-full ml-auto mt-auto md:mt-12 rounded-[12px] overflow-hidden relative -z-0">
          <ImageSlider
            :images="images"
            :img-attrs="{
              class: 'h-full w-full object-cover',
              width: 1000,
              height: 600,
              sizes: 'sm:100vw md:50vw lg:800px',
              alt: 'Factory Image'
            }"
          />
        </div>
      </section>
    </div>
  </div>
</template>