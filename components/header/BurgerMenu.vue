<script setup lang="ts">
const isOpen = useState('burgerOpen', () => false)

const closeMenu = () => {
    isOpen.value = false
}
</script>

<template>
    <Teleport to="body">
        <Transition name="slide">
            <div
                v-if="isOpen"
                class="fixed inset-0 z-40 flex"
            >
                <!-- Задний фон -->
                <div
                    class="flex-1 bg-black/40 backdrop-blur-sm"
                    @click="closeMenu"
                />

                <!-- Меню -->
                <div class="w-[90vw] max-w-[450px] bg-popover text-popover-foreground h-full p-6 flex flex-col">
                    <!-- Кнопка закрытия -->
                    
                    <HeaderBurgerButton color-class="bg-accent" />
                    <NuxtImg src="/logo-black.png" width="183" height="124"/>
                    <Navigation
                        class="flex flex-col gap-2 py-7 px-0 lg:px-5"
                        link-class="hover:scale-110 transition-transform duration-75"
                        @link-click="isOpen = false"
                    />
                    <WaweButton>Contact Us</WaweButton>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform .5s ease;
}

.slide-enter-from {
    transform: translateX(100%);
}

.slide-enter-to {
    transform: translateX(0%);
}

.slide-leave-from {
    transform: translateX(0%);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>
