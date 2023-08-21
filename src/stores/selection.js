import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectionStore = defineStore('selectionStore', () => {
  const selectedNode = ref(null)

  const isSelectionPresent = computed(() => selectedNode.value !== null)
  const selectedPrizeAward = computed(() => selectedNode.value?.data)

  function onSelectionChanged({ api: gridApi }) {
    const selectedNodes = gridApi.getSelectedNodes()
    selectedNode.value = selectedNodes.length ? selectedNodes[0] : null
  }

  function clearSelection() {
    if (!isSelectionPresent.value) {
      return
    }
    selectedNode.value.setSelected(false)
    selectedNode.value = null
  }

  return { isSelectionPresent, selectedPrizeAward, onSelectionChanged, clearSelection }
})
