<script setup>
import { useQuickFilterStore } from '@/stores/quickFilter'

const quickFilterStore = useQuickFilterStore()
</script>

<template>
  <FormKit
    type="text"
    placeholder="Quick Search"
    suffix-icon="search"
    :delay="500"
    v-model="quickFilterStore.filterValue"
  />
</template>
