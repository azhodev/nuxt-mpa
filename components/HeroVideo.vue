<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showVideo = ref(false)

onMounted(() => {
  // Можно добавить небольшую задержку для плавности
  setTimeout(() => {
    showVideo.value = true
  }, 2000) // 100мс, можно 0
})
</script>

<template>
  <div class="fixed top-0 w-full h-full -z-10">
    <img
      v-if="!showVideo"
      src="/bg-poster-compressed.webp"
      alt="Hero background"
      class="w-full h-full object-cover fixed -z-10"
    />
    <Transition
      name="fade"
    >
      <video
        v-if="showVideo"
        class="fixed top-0 w-full h-full object-cover object-[center_top] -z-10"
        poster="/bg-poster-compressed.webp"
        muted
        playsinline
        autoplay
        loop
      >
        <source
          :src="'/videos/background.webm'"
          type="video/webm"
        />
        <source
          :src="'/videos/background.mp4'"
          type="video/mp4"
        />
      </video>

    </Transition>
    <div class="fixed top-0 w-full h-full object-cover -z-10 bg-background/70"></div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s, filter 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    filter: blur(5px);
}
</style>