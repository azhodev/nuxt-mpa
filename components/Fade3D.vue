<!-- components/Fade3D.vue -->
<template>
  <Transition
    enter-active-class="animate-fade-in-3d"
    leave-active-class="animate-fade-out-3d"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>
