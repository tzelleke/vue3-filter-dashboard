import { computed, ref } from 'vue'

export function useSimpleFilter() {
  const filterValue = ref('')

  const isFilterPresent = computed(() => Boolean(filterValue.value))

  function clear() {
    filterValue.value = ''
  }

  return {
    filterValue,
    isFilterPresent,
    clear,
  }
}
