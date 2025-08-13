<script setup>
import { Skeleton } from '@/components/ui/skeleton'

const props = defineProps({
    images: {
        type: Array,
        required: true
    },
    loadingDelay: {
        type: Number,
        default: 600
    },
    slideInterval: {
        type: Number,
        default: 4000
    },
    imgAttrs: {
        type: Object,
        default: () => ({})
    }
})

const imageLoaded = ref(false)
const currentIndex = ref(0)

let loadingTimeoutId = null
let slideIntervalId = null

onMounted(() => {
    loadingTimeoutId = setTimeout(() => {
        imageLoaded.value = true
        startSlider()
    }, props.loadingDelay)
})

onUnmounted(() => {
    if (loadingTimeoutId) clearTimeout(loadingTimeoutId)
    if (slideIntervalId) clearInterval(slideIntervalId)
})

function startSlider() {
    slideIntervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.images.length
    }, props.slideInterval)
}
</script>

<template>
    <div class="w-full h-full rounded-[12px] overflow-hidden relative">
        <template v-if="imageLoaded">
            <transition
                name="fade"
                mode="out-in"
            >
                <NuxtPicture
                    :key="props.images[currentIndex]"
                    :src="props.images[currentIndex]"
                    format="avif,webp,jpg,png"
                    v-bind="props.imgAttrs"
                    :img-attrs="{
                        class: 'h-full w-full object-cover',
                        style: 'display: block',
                    }"
                />
            </transition>
        </template>

        <Skeleton
            v-else
            class="w-full h-full bg-gray-300 dark:bg-gray-800"
        />
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
