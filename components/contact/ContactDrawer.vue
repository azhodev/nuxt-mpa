<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const isDrawerOpen = useState('drawerOpen', () => false)
</script>

<template>
  <Drawer v-model:open="isDrawerOpen">
    <DrawerTrigger as-child>
      <slot />
    </DrawerTrigger>
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
  </Drawer>
</template>