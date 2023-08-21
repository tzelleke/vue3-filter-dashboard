<script setup>
defineProps(['href'])
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer"><slot /></a>
</template>
