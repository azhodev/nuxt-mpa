<script setup lang="ts">
import { useForm, configure } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from 'vue-sonner'

import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea' // если у тебя нет этого компонента, нужно его добавить

const isDrawerOpen = useState('drawerOpen')

// Default values
configure({
    validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
    validateOnChange: false, // controls if `change` events should trigger validation with `handleChange` handler
    validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
    validateOnModelUpdate: false, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

// Валидация с Zod
const formSchema = toTypedSchema(z.object({
    name: z.string().min(2, "Name is too short").max(50),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
}))

const form = useForm({
    validationSchema: formSchema,
    validateOnMount: false,       // не валидировать при загрузке
})

const onSubmit = form.handleSubmit((values) => {
    console.log('Feedback submitted:', values)
    isDrawerOpen.value = false
    toast('Thank you for your feedback!', {
        description: 'We’ve received your message and will get back to you soon.',
        action: {
            label: 'Close',
            onClick: () => console.log('Toast closed'),
        },
    })
})
</script>

<template>
    <form
        @submit="onSubmit"
        class="space-y-4"
    >
        <!-- Name -->
        <FormField
            v-slot="{ componentField }"
            name="name"
        >
            <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                    <Input
                        type="text"
                        placeholder="John Doe"
                        v-bind="componentField"
                        class="border border-accent"
                    />
                </FormControl>
                <FormDescription>
                    Enter your full name.
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- Email -->
        <FormField
            v-slot="{ componentField }"
            name="email"
        >
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        v-bind="componentField"
                        class="border border-accent"
                    />
                </FormControl>
                <FormDescription>
                    We'll use this to contact you.
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- Message -->
        <FormField
            v-slot="{ componentField }"
            name="message"
        >
            <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Textarea
                        rows="3"
                        style="resize: none;"
                        placeholder="Your message here..."
                        v-bind="componentField"
                        class="border border-accent"
                    />
                </FormControl>
                <FormDescription>
                    Share your thoughts or feedback.
                </FormDescription>
                <FormMessage />
            </FormItem>
        </FormField>

        <!-- Submit Button -->
        <Button
            type="submit"
            class="btn bg-accent text-accent-foreground hover:bg-green-600 rounded-xl"
        >
            Send Feedback
        </Button>
    </form>
</template>
