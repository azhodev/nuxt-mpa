<script setup lang="ts">
import { commodities } from '~/data/commodities';
useHead({
  title: 'Commodities',
  meta: [
    {
      name: 'description',
      content: 'Explore our range of agricultural commodities and products.'
    }
  ]
})
</script>

<template>
    <div class="pt-8 pb-15">
        <div class="container">
            <div class="grid xs:grid-cols-(--my-grid-cols) gap-5">
                <CommodityCard
                    v-for="(item, index) in commodities"
                    :key="index"
                    :item="item"
                />
            </div>
        </div>
    </div>
</template>