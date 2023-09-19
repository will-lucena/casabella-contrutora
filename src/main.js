import './assets/base.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'

import VueGoogleMaps from '@fawmi/vue-google-maps'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'

library.add(faBars, faXmark, faInstagram, faWhatsapp, faFacebook, faChevronRight, faChevronLeft)

import App from './App.vue'

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_MAPS_KEY,
      language: 'pt-BR'
    },
    autobindAllEvents: true
  })
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
