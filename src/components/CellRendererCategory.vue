<script setup>
import CategoryEntry from './CategoryEntry.vue'

defineProps(['params'])
</script>

<template>
  <CategoryEntry :category_slug="params.data.category_slug" :category="params.data.category" />
</template>
