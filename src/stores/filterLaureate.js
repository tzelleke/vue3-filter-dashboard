import { computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { _ } from 'lodash'
import { useSimpleFilter } from '@/composables/filter'
import { useGridStore } from '@/stores/grid'

const options = {
  INDIVIDUAL: { label: 'Individual Laureate', filter: (data) => data.full_name !== null },
  MALE: { label: 'male Laureate', filter: (data) => data.gender === 'male' },
  FEMALE: { label: 'female Laureate', filter: (data) => data.gender === 'female' },
  ORG: { label: 'Organization', filter: (data) => data.org_name !== null },
  ALIVE: {
    label: 'Individual Laureate (alive)',
    filter: (data) => data.full_name !== null && data.death_date === null,
  },
  DECEASED: { label: 'Individual Laureate (deceased)', filter: (data) => data.death_date !== null },
  MULTIPLE_AWARDED: { label: 'multiple awarded Laureate', filter: (data) => data.multiple_awarded },
}

export const useFilterLaureateStore = defineStore('filterLaureateStore', () => {
  const gridStore = useGridStore()
  const { filterValue, isFilterPresent, clear } = useSimpleFilter()

  watch(filterValue, () => {
    gridStore.onFilterChanged()
  })

  const doesFilterPass = computed(() => (data) => {
    return !isFilterPresent.value || options[filterValue.value].filter(data)
  })

  return {
    options: _.mapValues(options, 'label'),
    filterValue,
    isFilterPresent,
    doesFilterPass,
    clear,
  }
})
