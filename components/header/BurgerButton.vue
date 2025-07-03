<script setup lang="ts">
const isOpen = useState("burgerOpen", () => false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <button @click="toggleMenu" class="z-50 relative">
        <div class="ham-menu" :class="{ active: isOpen }">
            <span></span><span></span><span></span>
        </div>
    </button>
</template>

<style scoped>
.ham-menu {
    height: 40px;
    width: 40px;
    position: relative;
}

.ham-menu span {
    height: 5px;
    width: 100%;
    background-color: var(--accent);
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transition: 0.1s ease-in-out;
}

.ham-menu span:nth-child(1) {
    top: 25%;
}

.ham-menu span:nth-child(3) {
    top: 75%;
}

.ham-menu.active span:nth-child(1) {
    transform: translate(-50%, 200%) rotate(45deg);
}

.ham-menu.active span:nth-child(2) {
    opacity: 0;
}

.ham-menu.active span:nth-child(3) {
    transform: translate(-50%, -200%) rotate(-45deg);
}
</style>
