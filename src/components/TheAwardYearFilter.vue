<script setup>
import Multiselect from '@vueform/multiselect'
import '@/assets/vueform-custom.css'
import '@vueform/multiselect/themes/default.css'
import { useNobelPrizesStore } from '../stores/nobelPrizes'
import { useFilterAwardYearStore } from '../stores/filterAwardYear'

const nobelPrizesStore = useNobelPrizesStore()
const filterAwardYearStore = useFilterAwardYearStore()
</script>

<template>
  <div style="width: 180px" class="text-gray-700">
    <Multiselect
      v-model="filterAwardYearStore.filterValue"
      :options="nobelPrizesStore.awardYears"
      placeholder="Award Year"
    />
  </div>
</template>
