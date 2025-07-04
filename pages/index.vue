<script setup lang="ts">
import { contactGroups } from '~/data/contactGroups';
import { cards } from '~/data/homeCards';

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Welcome to Agrofusion – a modern agricultural solutions platform.'
    }
  ]
})
</script>

<template>
  <div class="py-8 xs:py-15">
    <div class="container">
      <div class="flex gap-4 xs:gap-5 flex-col xl:flex-row">
        <div class="flex-1 grid xs:grid-cols-(--home-grid-cols) gap-x-4 gap-y-4">
          <HomeCard
            v-for="(item, index) in cards"
            :key="index"
            :to="item.to"
            :image="item.image"
            :title="item.title"
            :description="item.description"
          />
        </div>
        <div class="xs:basis-[400px] min-h-[636px] relative rounded-[24px] overflow-hidden">
          <NuxtPicture
            alt="The Catcher in the Rye"
            src="/cards/5.webp"
            class="absolute top-0 left-0 w-full h-full object-cover"
            format="avif,webp,jpg"
            width="800"
            height="600"
            sizes="sm:100vw md:50vw lg:800px"
            :imgAttrs="{
              class: 'h-full w-full object-cover',
              style: 'display: block',
            }"
          />

          <div class="absolute p-2 xs:p-9 w-full">
            <h2 class="text-center xs:text-left">contact us</h2>
            <ContactGroupList
              :groups="contactGroups"
              class="mt-5"
              item-class="flex flex-col gap-3 border-l border-black/30 pl-5"
              link-wrapper-class="flex gap-4"
              link-class="flex gap-1 items-center text-lg"
              icon-class="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
