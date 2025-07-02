<script setup lang="ts">
const features = [
    {
        icon: "/icons/check.svg",
        title: "Quality Assurance",
        description: "Upholding the highest standards to ensure the quality and safety of our products."
    },
    {
        icon: "/icons/subtract.svg",
        title: "Sustainable Practices",
        description: "Promoting environmentally responsible practices throughout our operations."
    },
    {
        icon: "/icons/lamp-fill.svg",
        title: "Innovative Solutions",
        description: "Utilizing the latest technologies to optimize our supply chain and address the evolving needs of the market."
    },
    {
        icon: "/icons/chield-fill.svg",
        title: "Global Reach",
        description: "Facilitating seamless international trade with a vast network of partners and a presence in key markets."
    }
]
</script>

<template>
    <div class="py-[60px] lg:py-[120px]">
        <div class="container grid lg:grid-cols-[auto_510px] gap-5 xl:gap-x-[115px]">
            <div class="bg-secondary text-secondary-foreground py-10 px-8 rounded-[12px]">
                <h2 class="text-secondary-foreground">Our Mission</h2>
                <p class="max-w-[530px]">Our mission is to be the trusted partner for our partners. We strive to deliver exceptional service
                    and value through:</p>
            </div>

            <div class="flex flex-col justify-between gap-12 row-span-2">
                <FeatureItem
                    v-for="(feature, index) in features"
                    :key="index"
                    v-bind="feature"
                />
            </div>

            <div class="rounded-[12px] mt-10 lg:mt-0 overflow-hidden">
                <NuxtImg
                    src="/mission-card-bg.png"
                    class="w-full h-full object-cover"
                />
            </div>

        </div>
    </div>
</template>