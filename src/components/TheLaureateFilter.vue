<script setup>
import { useFilterLaureateStore } from '@/stores/filterLaureate'

const filterLaureateStore = useFilterLaureateStore()
</script>

<template>
  <FormKit type="select" v-model="filterLaureateStore.filterValue" select-icon="caretDown">
    <option value="">All Laureates</option>
    <option v-for="(label, slug) in filterLaureateStore.options" :key="slug" :value="slug">
      {{ label }}
    </option>
  </FormKit>
</template>
