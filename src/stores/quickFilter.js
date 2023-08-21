import { defineStore } from 'pinia'
import { useSimpleFilter } from '@/composables/filter'

export const useQuickFilterStore = defineStore('quickFilterStore', () => useSimpleFilter())
