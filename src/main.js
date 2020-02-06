import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

export const serverBus = new Vue();

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
