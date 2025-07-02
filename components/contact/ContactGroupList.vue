<script setup lang="ts">
defineProps<{
  groups: {
    name: string
    contacts: {
      href: string
      icon: string
      label: string
    }[]
  }[]
  wrapperClass?: string
  itemClass?: string
  nameClass?: string
  linkWrapperClass?: string
  linkClass?: string
  iconClass?: string
  labelClass?: string
}>()
</script>

<template>
  <div :class="wrapperClass ?? 'flex flex-col gap-5'">
    <div
      v-for="(group, index) in groups"
      :key="index"
      :class="itemClass ?? 'flex flex-col gap-3'"
    >
      <h3 :class="nameClass ?? 'font-normal w-[258px]'">{{ group.name }}</h3>
      <ContactLinks
        :contacts="group.contacts"
        :wrapper-class="linkWrapperClass ?? 'flex flex-col gap-2'"
        :link-class="linkClass"
        :icon-class="iconClass"
        :label-class="labelClass"
      />
    </div>
  </div>
</template>
