<script setup lang="ts">
import { features } from '~/data/missionFeatures';
useHead({
    title: 'Our Mission',
    meta: [
        {
            name: 'description',
            content: 'Discover Agrofusion’s mission and values in revolutionizing agriculture.'
        }
    ]
})
</script>

<template>
    <div class="py-[60px] lg:py-[120px]">
        <div class="container grid lg:grid-cols-[auto_510px] gap-5 xl:gap-x-[115px]">
            <div class="bg-secondary text-secondary-foreground py-10 px-8 rounded-[12px]">
                <h2 class="text-secondary-foreground">Our Mission</h2>
                <p class="max-w-[530px]">Our mission is to be the trusted partner for our partners. We strive to deliver
                    exceptional service
                    and value through:</p>
            </div>

            <div class="flex flex-col justify-between gap-12 row-span-2">
                <FeatureItem
                    v-for="(feature, index) in features"
                    :key="index"
                    v-bind="feature"
                />
            </div>

            <div class="rounded-[12px] mt-10 lg:mt-0 overflow-hidden">
                <NuxtPicture
                    alt="Grains in hands"
                    src="/mission-card-bg.png"
                    class="w-full h-full object-cover"
                    :imgAttrs="{
                        class: 'w-full h-full object-cover min-h-[368px]',
                        style: 'display: block',
                    }"
                />
            </div>
        </div>
    </div>
</template>