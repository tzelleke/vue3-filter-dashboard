<script setup>
defineProps(['category_slug', 'category'])
</script>

<template>
  <div style="display: flex; flex-direction: row; align-items: center">
    <span class="text-xl mr-2">
      <FontAwesomeIcon icon="flask-vial" v-if="category_slug === 'chemistry'" />
      <FontAwesomeIcon icon="money-check-dollar" v-if="category_slug === 'economic-sciences'" />
      <FontAwesomeIcon icon="book" v-if="category_slug === 'literature'" />
      <FontAwesomeIcon icon="dove" v-if="category_slug === 'peace'" />
      <FontAwesomeIcon icon="atom" v-if="category_slug === 'physics'" />
      <FontAwesomeIcon icon="heart-pulse" v-if="category_slug === 'physiology-or-medicine'" />
    </span>
    <span>{{ category }}</span>
  </div>
</template>
