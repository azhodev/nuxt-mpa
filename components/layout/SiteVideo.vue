<template>
    <video
        class="fixed top-0 w-full h-full object-cover -z-10"
        poster="/bg-poster.jpg"
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
</template>