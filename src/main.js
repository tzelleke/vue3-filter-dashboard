import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig } from '@formkit/vue'
import formkitConfig from '@/formkit.config'
import FontAwesomePlugin from '@/plugins/FontAwesome'
import '@/assets/style.css'
import AppSection from '@/components/AppSection.vue'
import CloseButton from '@/components/CloseButton.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import CountryFlag from 'vue-country-flag-next'
import App from '@/App.vue'

createApp(App)
  .use(createPinia())
  .use(formkitPlugin, formkitDefaultConfig(formkitConfig))
  .use(FontAwesomePlugin)
  .component('AppSection', AppSection)
  .component('CloseButton', CloseButton)
  .component('ExternalLink', ExternalLink)
  .component('CountryFlag', CountryFlag)
  .mount('#app')
