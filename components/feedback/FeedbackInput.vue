<script setup lang="ts">
defineProps<{
  name: string
  label: string
  type?: string
  placeholder?: string
  field: Record<string, any>
}>()
</script>

<template>
  <div class="relative w-full">
    <input
      v-bind="field"
      :id="name"
      :type="type || 'text'"
      :placeholder="placeholder || ' '"
      class="peer block w-full border border-input rounded-md px-3 pt-6 pb-2 text-sm bg-background placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent"
    />
    <label
      :for="name"
      class="absolute left-3 top-2 text-muted-foreground text-xs transition-all scale-100 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-100"
    >
      {{ label }}
    </label>
  </div>
</template>
