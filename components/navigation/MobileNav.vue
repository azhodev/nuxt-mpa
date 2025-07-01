<script setup lang="ts">
import Navigation from "./Navigation.vue";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
    DialogDescription,
} from "@/components/ui/dialog";

import { MENU_DATA } from "~/data/menu";
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <UiButton
                class="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
                Menu
            </UiButton>
        </DialogTrigger>

        <DialogContent class="max-w-sm w-[90%]">
            <DialogHeader>
                <DialogTitle class="hidden text-center text-xl font-bold"
                    >Navigation</DialogTitle
                >
                <DialogDescription class="sr-only">
                    Navigation menu. Use arrows or tab to select a link.
                </DialogDescription>
            </DialogHeader>

            <Navigation class="flex flex-col gap-2 font-bold" link-class="" />

            <!-- <DialogFooter class="mt-6">
                <DialogClose as-child aria-label="Close">
                    <button
                        class="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                        Close
                    </button>
                </DialogClose>
            </DialogFooter> -->
        </DialogContent>
    </Dialog>
</template>
