<script setup lang="ts">
import type { CardCommodity } from '~/types/cards';

useHead({
  title: 'Commodities',
  meta: [
    {
      name: 'description',
      content: 'Explore our range of agricultural commodities and products.'
    }
  ]
})

const commodities = ref<CardCommodity[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

type CommoditiesResponse = CardCommodity[] | { message: string };

async function fetchCommodities(): Promise<void> {
  try {
    loading.value = true;
    const response = await fetch('https://f5e93a55981fec3d.mokky.dev/commodities');
    const data: CommoditiesResponse = await response.json();

    if (!response.ok) {
      if ('message' in data) {
        throw new Error(data.message);
      }
      throw new Error('Failed to fetch commodities');
    }

    commodities.value = data as CardCommodity[];;
} catch (err) {
  if (err instanceof Error) {
    error.value = err.message;
  } else {
    error.value = String(err);
  }
} finally {
  loading.value = false;
}
}

onMounted(fetchCommodities)
</script>

<template>
  <div class="pt-8 pb-15">
    <div class="container">
      <div class="grid xs:grid-cols-(--my-grid-cols) gap-5">
        <p v-if="loading">Loading...</p>
        <p v-else-if="error">{{ error }}</p>
        <CardCommodity
          v-for="(item, index) in commodities"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>