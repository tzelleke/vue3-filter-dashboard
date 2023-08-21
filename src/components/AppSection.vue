<script setup>
defineProps({
  element: {
    type: String,
    default: 'section',
  },
  containerClass: {
    type: String,
    default: 'items-center py-2',
  },
})
</script>

<template>
  <component :is="element">
    <div class="container flex flex-row" :class="containerClass">
      <slot />
    </div>
  </component>
</template>
