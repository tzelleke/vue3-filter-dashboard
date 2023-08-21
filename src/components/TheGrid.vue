<script setup>
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import '@/assets/ag-grid-custom.css'
import { isDark } from '@/composables/themeMode'
import { AgGridVue } from 'ag-grid-vue3'
import { useNobelPrizesStore } from '@/stores/nobelPrizes'
import { useGridStore } from '@/stores/grid'
import { useQuickFilterStore } from '@/stores/quickFilter'
import { useFilterStore } from '@/stores/filter'
import { useSelectionStore } from '@/stores/selection'
import ThePrizeDetails from './ThePrizeDetails.vue'

const nobelPrizesStore = useNobelPrizesStore()
const gridStore = useGridStore()
const quickFilterStore = useQuickFilterStore()
const filterStore = useFilterStore()
const selectionStore = useSelectionStore()
</script>

<template>
  <AppSection class="bg-gray-100 dark:bg-slate-800 dark:text-gray-200" containerClass="pt-8 pb-2">
    <div class="font-bold mx-auto">
      Click on a column header to sort according to that column. (SHIFT-Click to sort by multiple
      columns)<br />
      Click on a record to see further details about a prize award. (CTRL-Click to deselect)
    </div>
  </AppSection>
  <AppSection
    class="bg-gradient-to-b from-gray-100 dark:from-slate-800 to-30% dark:to-90%"
    containerClass="pt-2 pb-16"
  >
    <div class="flex flex-row w-full drop-shadow-2xl">
      <div class="grow">
        <ag-grid-vue
          :rowData="nobelPrizesStore.nobelPrizes"
          :columnDefs="gridStore.columnDefs"
          :pagination="true"
          :paginationAutoPageSize="true"
          :quickFilterText="quickFilterStore.filterValue"
          :cacheQuickFilter="true"
          :includeHiddenColumnsInQuickFilter="true"
          :isExternalFilterPresent="filterStore.isExternalFilterPresent"
          :doesExternalFilterPass="filterStore.doesExternalFilterPass"
          @grid-ready="gridStore.onGridReady"
          @first-data-rendered="gridStore.onFirstDataRendered"
          @selection-changed="selectionStore.onSelectionChanged"
          @model-updated="selectionStore.clearSelection"
          rowSelection="single"
          :suppressRowHoverHighlight="true"
          :class="isDark ? 'ag-theme-alpine-dark' : 'ag-theme-alpine'"
          style="height: 600px"
        />
      </div>
      <Transition name="slide">
        <ThePrizeDetails
          v-if="selectionStore.isSelectionPresent"
          :prize="selectionStore.selectedPrizeAward"
          @close="selectionStore.clearSelection"
        />
      </Transition>
    </div>
  </AppSection>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: width 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  width: 0;
}

.slide-enter-to,
.slide-leave-from {
  width: 360px;
}
</style>
