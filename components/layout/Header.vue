<script setup>
const routeInfo = useRouteInfo()
</script>

<template>
    <div
        class="fixed bottom-full w-full z-20 bg-black/40 hover:bg-black/80 text-primary transition-all"
        id="layout-header"
        :class="routeInfo.isHomePage ? '' : 'translate-y-full'"
    >
        <div class="container flex justify-between items-center">
            <NuxtImg
                src="/logo.png"
                width="84px"
                class="my-1"
            />
            <Navigation class="hidden lg:flex gap-15 font-bold"/>
            <UiButton class="btn px-5 py-1.5">contact us</UiButton>
        </div>
    </div>
</template>