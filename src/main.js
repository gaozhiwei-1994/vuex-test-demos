
import Vue from 'vue'
import store from './store'
import App from './components/app.vue'
import {currency} from './currency'

Vue.filter('currency', currency)

new Vue({
  el: '#app',
  render: h =>h(App),
  store,
})
