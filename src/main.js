import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'
import { Plugin } from 'vue-responsive-video-background-player'

import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App)
.use(Quasar, quasarUserOptions)
.use(createPinia())
.use(VueSmoothScroll)
.use(Plugin)
.mount('#app')
