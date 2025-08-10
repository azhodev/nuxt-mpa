<script setup>
import { ref } from 'vue'

const props = defineProps({
    customClass: {
        type: String,
        default: ''
    },
    tiltIntensity: {
        type: Number,
        default: 15
    },
    glare: {
        type: Boolean,
        default: true
    }
})

const tiltStyle = ref({})
const glareStyle = ref({})

const handleMouseMove = (event) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const percentX = (x - centerX) / centerX
    const percentY = (y - centerY) / centerY

    const rotateX = percentY * props.tiltIntensity * -1
    const rotateY = percentX * props.tiltIntensity

    tiltStyle.value = {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease'
    }

    if (props.glare) {
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90
        const normAngle = angle < 0 ? angle + 360 : angle
        const opacity = Math.min(1, Math.hypot(percentX, percentY))

        glareStyle.value = {
            background: `linear-gradient(${normAngle}deg, rgba(255,255,255,${opacity * 0.4}) 0%, transparent 80%)`
        }
    }
}

const resetTilt = () => {
    tiltStyle.value = {
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.3s ease'
    }
    glareStyle.value = {}
}
</script>

<template>
    <div
        class="tilt-wrapper"
        @mousemove="handleMouseMove"
        @mouseleave="resetTilt"
    >
        <div
            :class="['tilt-container', props.customClass]"
            :style="tiltStyle"
        >
            <slot />
            <div
                v-if="props.glare"
                class="glare"
                :style="glareStyle"
            ></div>
        </div>
    </div>
</template>

<style scoped>
.tilt-wrapper {
    display: inline-block;
    perspective: 1000px;
}

.tilt-container {
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    border-radius: 12px;
    overflow: hidden;
}

.glare {
    pointer-events: none;
    position: absolute;
    inset: 0;
    mix-blend-mode: screen;
}
</style>
