import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.filter('calculateLength', (value) => {
  return value + ' (' + value.length + ')';
});

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
