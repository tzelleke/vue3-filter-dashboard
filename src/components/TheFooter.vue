<script setup>
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL
const nobelPrizeApiUrl = 'https://www.nobelprize.org/about/developer-zone-2/'
</script>

<template>
  <AppSection
    element="footer"
    class="bg-gray-100 dark:bg-slate-900 dark:text-gray-200"
    containerClass="gap-x-4 pt-8 pb-12"
  >
    <div class="basis-1/2">
      <h3>Disclaimer</h3>
      <p>
        Data presented on this site has been obtained from the
        <ExternalLink :href="nobelPrizeApiUrl">Nobel Prize API</ExternalLink>.
      </p>
      <h3>Privacy Policy</h3>
      <p>
        This site does not use cookies or any other means to track you. It does not collect any
        personal data.
      </p>
    </div>
    <div class="basis-1/2">
      <h3>Contact</h3>
      <p>For inquiries or if you want to report a problem write to {{ contactEmail }}.</p>
    </div>
  </AppSection>
</template>
