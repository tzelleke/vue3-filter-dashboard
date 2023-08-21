<script setup>
const props = defineProps(['params'])
const countryCode = props.params.data.birth_country_code
const countryName = props.params.data.birth_country
</script>

<template>
  <div style="display: flex; flex-direction: row; align-items: start">
    <country-flag
      v-if="countryCode"
      :country="countryCode"
      size="normal"
      style="margin-right: 1px"
    />
    <span>{{ countryName }}</span>
  </div>
</template>
