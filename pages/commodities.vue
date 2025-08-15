<script setup lang="ts">
import axios from 'axios'
import debounce from 'lodash/debounce'
import type { CardCommodity } from '~/types/cards';
import type { ISearchFilters } from '~/types/search';

import { Search } from "lucide-vue-next"
import { Input } from "@/components/ui/input"

useHead({
  title: 'Commodities',
  meta: [
    {
      name: 'description',
      content: 'Explore our range of agricultural commodities and products.'
    }
  ]
})

const filters: ISearchFilters = reactive({
  search: '',
  sortBy: 'title',
  sortOrder: 'asc'
})

const commodities = ref<CardCommodity[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

async function fetchCommodities(): Promise<void> {
  try {
    const params: ISearchFilters = {
      sortBy: filters.sortBy,
    }

    if (filters.search) {
      params.title = `*${filters.search}*`;
    }


    loading.value = true;
    const { data } = await axios.get('https://f5e93a55981fec3d.mokky.dev/commodities', { params });

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

watch(filters, debounce(fetchCommodities, 500), { deep: true });
</script>

<template>
  <div class="pt-8 pb-15">
    <div class="container flex flex-col gap-8 ">

      <div class="relative w-full max-w-sm items-center border-secondary border rounded-lg">
        <Input
          id="search"
          v-model="filters.search"
          type="text"
          class="pl-10"
          placeholder="Search..."
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>

      <!-- <p v-if="loading">Loading...</p>
      <p v-else-if="error">{{ error }}</p> -->

      <TransitionGroup
        name="fade"
        tag="div"
        class="grid md:grid-cols-2 gap-5"
      >
        <CardCommodity
          v-for="(item, index) in commodities"
          :key="index"
          :item="item"
        />
      </TransitionGroup>
    </div>
  </div>
</template>