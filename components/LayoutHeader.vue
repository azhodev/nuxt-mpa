<script setup lang="ts">
const routeInfo = useRouteInfo();

const headerRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

const isHomePage = computed(() => routeInfo.isHomePage);

function showHeader() {
    headerRef.value?.classList.add("header-visible");
    headerRef.value?.classList.remove("header-hidden");
}

function hideHeader() {
    headerRef.value?.classList.add("header-hidden");
    headerRef.value?.classList.remove("header-visible");
}

onMounted(() => {
    const hero = document.getElementById("hero-section");

    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && isHomePage.value) {
                hideHeader();
            } else {
                showHeader();
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
            showHeader();
        } else {
            hideHeader();
        }
    },
    {
        immediate: true
    }
);
</script>

<template>
    <header
        ref="headerRef"
        class="fixed -top-1 flex w-full z-20 bg-black/50 hover:bg-black/90 text-primary transition-all"
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

            <NavigationDesktop
                class="hidden lg:flex gap-10 font-bold"
                link-class="animate-underline leading-10"
            />
            <ContactDrawer>
                <UiButton class="btn hidden lg:flex px-5 py-1.5">contact us</UiButton>
            </ContactDrawer>

            <NavigationMobile class="flex lg:hidden" />
        </div>
    </header>
</template>
