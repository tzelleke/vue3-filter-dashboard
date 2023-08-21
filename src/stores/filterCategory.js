import { computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useSimpleFilter } from '@/composables/filter'
import { useGridStore } from '@/stores/grid'

export const useFilterCategoryStore = defineStore('filterCategoryStore', () => {
  const gridStore = useGridStore()
  const { filterValue, isFilterPresent, clear } = useSimpleFilter()

  watch(filterValue, () => {
    gridStore.onFilterChanged()
  })

  const doesFilterPass = computed(() => (data) => {
    return !isFilterPresent.value || data.category_slug === filterValue.value
  })

  return {
    filterValue,
    isFilterPresent,
    doesFilterPass,
    clear,
  }
})
