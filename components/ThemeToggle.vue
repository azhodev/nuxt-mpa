<script setup>
const { isDark, toggleTheme } = useTheme()
</script>

<template>
    <button
        class="mt-4 px-3 py-1 border rounded-lg hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95 transition self-baseline cursor-pointer"
        @click="toggleTheme"
    >
        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
    </button>
</template>
