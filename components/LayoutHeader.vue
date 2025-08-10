<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const routeInfo = useRouteInfo();
const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
    const hero = document.getElementById("hero-section");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                headerRef.value?.classList.add("fixed-header");
                if (!routeInfo.isHomePage) {
                    headerRef.value?.classList.remove("absolute-header");
                }
            } else {
                headerRef.value?.classList.remove("fixed-header");
                if (!routeInfo.isHomePage) {
                    headerRef.value?.classList.add("absolute-header");
                }
            }
        },
        { threshold: 0.1 }
    );

    if (hero) observer.observe(hero);
});

watch(
    () => routeInfo.isHomePage,
    (newVal) => {
        if (!headerRef.value) return;

        if (!newVal) {
            headerRef.value.classList.add("absolute-header");
        } else {
            headerRef.value.classList.remove("absolute-header");
        }
    },
    { deep: true }
);
</script>

<template>
    <div
        ref="headerRef"
        class="fixed flex bottom-full w-full z-20 bg-black/50 hover:bg-black/90 text-primary transition-all"
    >
        <div class="container flex justify-between items-center">
            <NuxtLink to="/">
                <NuxtPicture
                    src="/logo.webp"
                    width="84px"
                    height="52"
                    class="my-1"
                    alt="Logo Icon"
                    format="avif,webp,jpg,png"
                    sizes="sm:100vw md:50vw lg:800px"
                />

            </NuxtLink>
            <!-- Desktop -->
            <Navigation
                class="hidden lg:flex gap-10 font-bold"
                link-class="animate-underline leading-10"
            />
            <ContactDrawer>
                <UiButton class="btn hidden lg:flex px-5 py-1.5">contact us</UiButton>
            </ContactDrawer>
            <!-- Mobile -->
            <div class="flex lg:hidden">
                <NavigationMobile />
            </div>
        </div>
    </div>
</template>
