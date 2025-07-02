<script setup>
import MobileNav from '~/components/navigation/MobileNav'
const routeInfo = useRouteInfo()
</script>

<template>
    <div>
        <!-- Mobile -->
        <div
            class="fixed flex lg:hidden bottom-full w-full z-20 bg-black/40 hover:bg-black/80 text-primary transition-all translate-y-full"
            id="layout-header"
            :class="routeInfo.isHomePage ? '' : ''"
        >
            <div class="container flex justify-between items-center">
                <NuxtLink to="/">
                    <NuxtImg
                        src="/logo.png"
                        width="84"
                        height="52"
                        class="my-1"
                    />
                </NuxtLink>
                <MobileNav />
            </div>
        </div>
        
        <!-- Desktop -->
        <div
            class="fixed hidden lg:flex bottom-full w-full z-20 bg-black/40 hover:bg-black/80 text-primary transition-all"
            id="layout-header"
            :class="routeInfo.isHomePage ? '' : 'translate-y-full'"
        >
            <div class="container flex justify-between items-center">
                <NuxtLink to="/">
                    <NuxtImg
                        src="/logo.png"
                        width="84px"
                        class="my-1"
                    />
                </NuxtLink>
                <Navigation class="hidden lg:flex gap-15 font-bold" link-class="animate-underline"/>
                <UiButton class="btn px-5 py-1.5">contact us</UiButton>
            </div>
        </div>
    </div>
</template>