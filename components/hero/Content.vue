<template>
    <div class="flex items-start flex-wrap border-l-divider pl-5 md:pl-28 md:pt-8">
        <div class="flex-1 basis-full lg:basis-0 flex-col items-center">
            <p class="text-lg text-accent">GRAIN TRADING COMPANY</p>
            <h1
                class="text-[clamp(2.5rem,14vw,5rem)] sm:text-[clamp(5rem,9vw,9rem)] mb-5 text-secondary-foreground font-serif">
                Agrofusion
            </h1>
            <!-- <UiButton class="btn bg-accent text-accent-foreground hover:bg-green-800 lowercase">Contact Us</UiButton> -->
            <ContactDrawer>
                <WaweButton>Contact Us</WaweButton>
            </ContactDrawer>
        </div>

        <div class="relative border-border border-l-0 lg:border-l-1">
            <NuxtImg
                src="/logo.png"
                width="138"
                class="absolute bottom-full hidden lg:block"
                alt="Logo Icon"
            />
            <Navigation
                class="flex flex-col gap-2 py-7 px-0 lg:px-5"
                link-class="hover:scale-110 transition-transform duration-75"
            />
        </div>
    </div>
</template>
