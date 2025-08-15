<script setup>
const show = ref(true)

onMounted(() => {
    const visited = sessionStorage.getItem('app_session_visited')

    if (visited) {
        show.value = false
        return
    }

    setTimeout(() => {
        show.value = false
        sessionStorage.setItem('app_session_visited', 'true')
    }, 1000)
})
</script>

<template>
    <transition name="fade">
        <div
            v-if="show"
            class="fixed inset-0 flex items-center justify-center bg-background z-[9999]"
        >
            <div class="spinner"></div>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s, filter 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    filter: blur(5px);
}
</style>
