import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useGridStore } from '@/stores/grid'
import { useQuickFilterStore } from '@/stores/quickFilter'
import { useFilterCategoryStore } from '@/stores/filterCategory'
import { useFilterLaureateStore } from '@/stores/filterLaureate'
import { useFilterAwardYearStore } from '@/stores/filterAwardYear'

export const useFilterStore = defineStore('filterStore', () => {
  const gridStore = useGridStore()
  const quickFilterStore = useQuickFilterStore()
  const filterCategoryStore = useFilterCategoryStore()
  const filterLaureateStore = useFilterLaureateStore()
  const filterAwardYearStore = useFilterAwardYearStore()

  const isExternalFilterPresent = computed(() => () => {
    return (
      filterCategoryStore.isFilterPresent ||
      filterLaureateStore.isFilterPresent ||
      filterAwardYearStore.isFilterPresent
    )
  })

  const isAnyFilterPresent = computed(() => {
    return isExternalFilterPresent.value() || quickFilterStore.isFilterPresent
  })

  const doesExternalFilterPass = computed(() => (node) => {
    return (
      filterCategoryStore.doesFilterPass(node.data) &&
      filterLaureateStore.doesFilterPass(node.data) &&
      filterAwardYearStore.doesFilterPass(node.data)
    )
  })

  function clearFilters() {
    quickFilterStore.clear()
    filterCategoryStore.clear()
    filterLaureateStore.clear()
    filterAwardYearStore.clear()
    setTimeout(() => gridStore.resetPagination(), 0)
    setTimeout(() => gridStore.restoreColumnState(), 0)
  }

  return {
    isExternalFilterPresent,
    isAnyFilterPresent,
    doesExternalFilterPass,
    clearFilters,
  }
})
