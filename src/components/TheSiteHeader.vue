<script setup>
import { computed } from 'vue'
import { useToggle } from '@vueuse/core'
import { isDark } from '@/composables/themeMode'
import { useNobelPrizesStore } from '@/stores/nobelPrizes'

const repoUrl = import.meta.env.VITE_REPO_URL
const nobelPrizesStore = useNobelPrizesStore()
const toggleDark = useToggle(isDark)
const iconName = computed(() => (isDark.value ? 'sun' : 'moon'))
</script>

<template>
  <AppSection
    element="header"
    class="dark:bg-slate-900 text-gray-700 dark:text-gray-200 border-b border-b-gray-200 dark:border-b-slate-600"
  >
    <span class="font-bold">Total Prizes Awarded:</span>&nbsp;{{ nobelPrizesStore.totalPrizes }}
    <button
      @click="toggleDark()"
      class="ml-auto text-xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      <FontAwesomeIcon :icon="{ prefix: 'fas', iconName }" />
    </button>
    <ExternalLink
      :href="repoUrl"
      class="ml-4 px-4 border-l border-gray-200 dark:border-gray-400 text-xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      <FontAwesomeIcon :icon="{ prefix: 'fab', iconName: 'github' }" />
    </ExternalLink>
  </AppSection>
</template>
