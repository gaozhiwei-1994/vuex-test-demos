
import Vue from 'vue'
import App from './components/app.vue'
import store from './store/index'

import './base.css'

new Vue({
  el: '#app',
  render: h => h(App),
  store
})
