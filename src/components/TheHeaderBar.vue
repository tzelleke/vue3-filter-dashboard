<script setup>
import TheQuickFilter from '@/components/TheQuickFilter.vue'
</script>

<template>
  <AppSection
    class="dark:bg-slate-900 dark:text-gray-200 border-b border-b-gray-200 dark:border-b-slate-600"
    containerClass="gap-x-3 items-center py-2"
  >
    <h1 class="text-xl font-bold">Nobel Prizes <small>since 1901</small></h1>
    <div class="ml-auto">
      <TheQuickFilter />
    </div>
  </AppSection>
</template>
