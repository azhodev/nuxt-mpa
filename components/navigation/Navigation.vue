<!-- components/navigation/navigation.vue -->
<script setup>
import { MENU_DATA } from "~/data/menu";

const props = defineProps({
    wrapperClass: { type: String, default: "" },
    linkClass: { type: String, default: "" },
});

const routeInfo = useRouteInfo();
</script>

<template>
    <nav :class="wrapperClass">
        <NuxtLink
            v-for="link in MENU_DATA"
            :key="link.to"
            :to="link.to"
            :class="[
                linkClass,
                {
                    'opacity-40 pointer-events-none':
                        routeInfo.routePath === link.to,
                },
            ]"
        >
            {{ link.label }}
        </NuxtLink>
    </nav>
</template>
