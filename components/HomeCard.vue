<script setup lang="ts">
import type { HomeCard } from '~/types/cards'
const props = defineProps<HomeCard>()
</script>

<template>
    <NuxtLink
        :to="props.to"
        class="relative pb-[70%] overflow-hidden rounded-[24px] flex flex-col hero-card"
    >
        <NuxtPicture
            :src="props.image"
            class="absolute top-0 left-0 w-full h-full object-cover"
            :alt="props.title"
            format="avif,webp,jpg,png"
            sizes="(max-width: 640px) 100vw, 400px"
            quality="60"
            width="400"
            height="260"
            loading="lazy"
            :img-attrs="{
                class: 'h-full w-full object-cover',
                style: 'display: block',
            }"
        />

        <div
            class="absolute h-full p-5 flex flex-col items-start justify-between bg-black/40 text-secondary-foreground">
            <div class="relative flex gap-5 flex-col xs:flex-row flex-wrap">
                <UiButton class="rounded-2xl font-serif text-xl">
                    {{ props.title }}
                </UiButton>
                <p class="line-clamp-3 xl:line-clamp-6 text-sm xs:text-base leading-4 xs:leading-5">
                    {{ props.description }}
                </p>
            </div>
            <UiButton class="btn bg-secondary text-secondary-foreground rounded-[122px] px-9 py-2.5 hover:bg-green-700">
                Learn more...
            </UiButton>
        </div>
    </NuxtLink>
</template>
