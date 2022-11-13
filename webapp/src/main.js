import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyApDtWu_99WSaq5FwOi2m6uU1L6jZXg00U',
    libraries: 'places',
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
