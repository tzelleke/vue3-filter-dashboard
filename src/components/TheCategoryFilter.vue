<script setup>
import { useNobelPrizesStore } from '@/stores/nobelPrizes'
import { useFilterCategoryStore } from '@/stores/filterCategory'
import CategoryEntry from '@/components/CategoryEntry.vue'

const nobelPrizesStore = useNobelPrizesStore()
const filterCategoryStore = useFilterCategoryStore()
</script>

<template>
  <FormKit type="select" v-model="filterCategoryStore.filterValue" select-icon="caretDown">
    <option value="">All Categories</option>
    <option v-for="(category, slug) in nobelPrizesStore.categories" :key="slug" :value="slug">
      <CategoryEntry :category_slug="slug" :category="category" />
    </option>
  </FormKit>
</template>
