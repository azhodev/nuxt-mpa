<template>
    <video
        class="fixed top-0 w-full h-full object-cover object-[center_top] -z-10"
        poster="/bg-poster-compressed.webp"
        muted
        playsinline
        autoplay
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
    <div class="fixed top-0 w-full h-full object-cover -z-10 bg-background/70"></div>
</template>