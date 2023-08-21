<script setup>
defineProps(['prize'])
defineEmits(['close'])
</script>

<template>
  <div class="overflow-x-hidden overflow-y-auto bg-gray-300 text-gray-800">
    <div style="width: 360px" class="relative p-12">
      <CloseButton @click="$emit('close')" class="absolute top-0 left-0 mt-4 ml-4" />
      <h2 class="text-xl">Prize Motivation:</h2>
      <div class="text-2xl font-normal italic mt-3">"{{ prize.motivation }}"</div>
    </div>
  </div>
</template>
