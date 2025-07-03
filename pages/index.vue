<script setup lang="ts">
import { contactGroups } from '~/data/contactGroups';

const cards = [
  {
    to: "/about",
    image: "/cards/1.jpeg",
    title: "About us",
    description:
      "To accomplish its long-term goal, Agrofusion has developed a robust origination network over the years…"
  },
  {
    to: "/mission",
    image: "/cards/2.jpeg",
    title: "Our mission",
    description:
      "Our mission is to be the trusted partner for our partners. We strive to deliver exceptional service and value through: …"
  },
  {
    to: "/commodities",
    image: "/cards/3.jpg",
    title: "Our Commodities",
    description:
      "Agrofusion is dedicated to operating with the highest ethical standards. Discover more about our deeply rooted principles"
  },
  {
    to: "/contacts",
    image: "/cards/4.jpeg",
    title: "Offices & Contacts",
    description:
      "Agrofusion is committed to work with the highest ethical standards. Learn more about the deeply ingrained principles…"
  }
]

// TODO:
// Заменить меню на бургер в кнопке хедера
// Заменить dialog на кастомный компонент, который появляется с анимацией
// Добавить Drawer для связи
// Добавить Gsap для анимации появления числовых данных в hero, кнопки "contact us" 

</script>

<template>
  <div class="py-15">
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
          <NuxtImg
            src="/cards/5.jpg"
            class="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div class="absolute p-9">
            <h2>contact us</h2>
            <ContactGroupList
              :groups="contactGroups"
              item-class="flex flex-col gap-3"
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

