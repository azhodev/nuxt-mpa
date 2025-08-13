<script setup lang="ts">
import ContactForm from '~/components/ContactForm.vue';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer'

const isDrawerOpen = ref(false)
</script>

<template>
  <Drawer v-model:open="isDrawerOpen">
    <DrawerTrigger
      as-child
      @click="$event.target.blur()"
    >
      <slot />
    </DrawerTrigger>

    <Teleport to="body">
      <DrawerContent class="rounded-t-0">
        <div class="mx-auto px-4 w-full max-w-xl min-h-[100vh]">
          <DrawerHeader>
            <DrawerTitle>Contact Us</DrawerTitle>
            <DrawerDescription class="sr-only">
              Leave your contact details and we will contact you
            </DrawerDescription>
          </DrawerHeader>

          <ContactForm />
        </div>
      </DrawerContent>
    </Teleport>
  </Drawer>
</template>