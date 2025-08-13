export const useTheme = () => {
    const isDark = ref(false)

    const toggleTheme = () => {
        isDark.value = !isDark.value
        document.documentElement.classList.toggle('dark', isDark.value)
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    onMounted(() => {
        isDark.value = localStorage.getItem('theme') === 'dark'
        document.documentElement.classList.toggle('dark', isDark.value)
    })

    return { isDark, toggleTheme }
}
