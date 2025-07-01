<template>
    <div
        class="flex items-start flex-wrap border-l-divider pl-5 md:pl-28 md:pt-8"
    >
        <div class="flex-1 basis-full lg:basis-0 flex-col items-center">
            <p class="text-sm text-accent">GRAIN TRADING COMPANY</p>
            <h1
                class="text-[clamp(2.5rem,14vw,5rem)] sm:text-[clamp(5rem,9vw,9rem)] mb-5 text-accent font-serif"
            >
                Agrofusion
            </h1>
            <UiButton
                class="btn bg-accent text-accent-foreground hover:bg-green-800 lowercase"
                >Contact Us</UiButton
            >
        </div>

        <div class="relative border-border border-l-0 lg:border-l-1">
            <NuxtImg
                src="/logo.png"
                width="138"
                class="absolute bottom-full hidden lg:block"
            />
            <Navigation class="flex flex-col py-7 px-0 lg:px-5" />
        </div>
    </div>
</template>
