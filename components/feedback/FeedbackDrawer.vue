<script setup lang="ts">
import FeedbackForm from './FeedbackForm.vue';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <slot />
    </DrawerTrigger>
    <DrawerContent class="rounded-t-0">
        <div class="mx-auto px-4 w-full max-w-xl min-h-[100vh]">
            <DrawerHeader>
              <DrawerTitle>Feedback</DrawerTitle>
              <DrawerDescription class="sr-only">
                Leave your contact details and we will contact you
              </DrawerDescription>
            </DrawerHeader>
            <FeedbackForm />
        </div>
    </DrawerContent>
  </Drawer>
</template>