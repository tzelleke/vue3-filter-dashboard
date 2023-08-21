<script setup>
import { ref } from 'vue'
import Slider from '@vueform/slider'
import { useNobelPrizesStore } from '@/stores/nobelPrizes'

const nobelPrizesStore = useNobelPrizesStore()
const value = ref(20)
</script>

<template>
  <div class="mt-4 py-4">
    <Slider
      v-model="value"
      :min="nobelPrizesStore.ageAtAwardRange.min"
      :max="nobelPrizesStore.ageAtAwardRange.max"
    />
  </div>
</template>

<style src="@vueform/slider/themes/default.css"></style>
