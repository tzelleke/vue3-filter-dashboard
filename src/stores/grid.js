import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useNobelPrizesStore } from './nobelPrizes'
import { _ } from 'lodash'
import CellRendererCategory from '@/components/CellRendererCategory.vue'
import CellRendererCountry from '@/components/CellRendererCountry.vue'

export const useGridStore = defineStore('gridStore', () => {
  const nobelPrizesStore = useNobelPrizesStore()
  const gridApi = ref()
  const gridColumnApi = ref()
  const columnState = ref()
  const columnDefs = ref([
    { headerName: 'Year', field: 'award_year', sortable: true, minWidth: 60, maxWidth: 80 },
    {
      headerName: 'Category',
      field: 'category',
      sortable: true,
      minWidth: 200,
      maxWidth: 240,
      cellRenderer: CellRendererCategory,
    },
    {
      headerName: 'Laureate',
      colId: 'laureate',
      sortable: true,
      valueGetter: (params) => params.data.full_name || params.data.org_name,
    },
    {
      headerName: 'Prize share',
      field: 'prize_share',
      sortable: true,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      headerName: 'Country of birth (nowadays)',
      colId: 'birth_country',
      minWidth: 200,
      maxWidth: 240,
      cellRenderer: CellRendererCountry,
    },
    {
      headerName: 'Date of birth',
      field: 'birth_date',
      sortable: true,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      headerName: 'Date of death',
      field: 'death_date',
      sortable: true,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      hide: true,
      valueGetter: (params) => _.chain(params.data).pick(['motivation']).values().join(' ').value(),
    },
  ])

  function onGridReady(params) {
    nobelPrizesStore.loadData()
    gridApi.value = params.api
    gridColumnApi.value = params.columnApi
  }

  function resizeColumns() {
    if (!gridColumnApi.value) {
      return
    }
    gridColumnApi.value.autoSizeColumn('laureate', true)
    gridApi.value.sizeColumnsToFit()
  }

  function resetPagination() {
    gridApi.value.paginationGoToFirstPage()
  }

  function onFirstDataRendered() {
    resizeColumns()
    columnState.value = gridColumnApi.value.getColumnState()
  }

  function onFilterChanged() {
    setTimeout(() => gridApi.value.onFilterChanged(), 0)
  }

  function restoreColumnState() {
    if (!gridColumnApi.value) {
      return
    }
    gridColumnApi.value.applyColumnState({ state: columnState.value })
  }

  return {
    gridApi,
    columnDefs,
    onGridReady,
    resizeColumns,
    resetPagination,
    onFirstDataRendered,
    onFilterChanged,
    restoreColumnState,
  }
})
