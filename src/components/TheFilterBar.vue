<script setup>
// import { useGridStore } from '@/stores/grid'
import { useFilterStore } from '@/stores/filter'
import TheCategoryFilter from '@/components/TheCategoryFilter.vue'
import TheLaureateFilter from '@/components/TheLaureateFilter.vue'
import TheAwardYearFilter from './TheAwardYearFilter.vue'

// const gridStore = useGridStore()
const filterStore = useFilterStore()
</script>

<template>
  <AppSection
    class="bg-gray-100 dark:bg-slate-800 dark:text-gray-200"
    containerClass="gap-x-3 items-center py-2"
  >
    <TheCategoryFilter />
    <TheLaureateFilter />
    <TheAwardYearFilter />
    <div class="ml-auto">
      <FormKit
        v-if="filterStore.isAnyFilterPresent"
        type="button"
        prefix-icon="stepBack"
        label="Clear Filters"
        @click="filterStore.clearFilters"
      />
    </div>
  </AppSection>
</template>
