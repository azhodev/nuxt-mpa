<script setup lang="ts">
const routeInfo = useRouteInfo();
const headerRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
    const hero = document.getElementById("hero-section");

    observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) {
                headerRef.value?.classList.add("header-visible");
                if (!routeInfo.isHomePage) {
                    headerRef.value?.classList.remove("header-hidden");
                }
            } else {
                headerRef.value?.classList.remove("header-visible");
                if (!routeInfo.isHomePage) {
                    headerRef.value?.classList.add("header-hidden");
                }
            }
        },
        { threshold: 0.1 }
    );

    if (hero) observer.observe(hero);
});

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
});

watch(
    () => routeInfo.isHomePage,
    (newVal) => {
        if (!headerRef.value) return;

        if (!newVal) {
            headerRef.value.classList.remove("header-hidden");
            headerRef.value?.classList.add("header-visible");
        } else {
            headerRef.value.classList.add("header-hidden");
            headerRef.value?.classList.remove("header-visible");
        }
    },
    { deep: true }
);
</script>

<template>
    <header
        ref="headerRef"
        class="fixed flex w-full z-20 bg-black/50 hover:bg-black/90 text-primary transition-all header-hidden"
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
            <NavigationDesktop
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
    </header>
</template>
