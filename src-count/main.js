
import Vue from 'vue'
import count from './count.vue'
//引入store js文件
import store from './store'

var vm = new Vue({
  el:'#app',
  render: h =>h(count),
  // 配置store对象  全局会有一个$store  （映射store）
  store
})

