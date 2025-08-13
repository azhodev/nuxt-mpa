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
    }, 1500)
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
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Необычный волновой спинер */
.spinner {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(from 0deg,
            #3b82f6,
            #9333ea,
            #f59e0b,
            #ef4444,
            #3b82f6);
    animation: spin 1.2s linear infinite;
    mask: radial-gradient(farthest-side, transparent calc(100% - 8px), black 0);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
