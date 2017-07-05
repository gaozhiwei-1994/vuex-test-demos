
import Vue from 'vue'
import Vuex from 'vuex'
//声明 使用
Vue.use(Vuex)

//状态对象
const state = {
  count: 0
}

/*
 mutations对象:
 1. 包含直接修改state数据的方法
 2. 一个mutation就是其中的一个方法
 */
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

/*
 actions对象:
 1. 包含多个方法, 一个action就是一个方法
 2. 由组件触发调用: $store.dispatch(actionName)
 3. 处理逻辑, 调用mutation更新状态: commit(mutationName)
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit,state}) {
    if (state.count % 2 == 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  }
}

//包含多个计算属性(只有get )的对象
const getters = {
  count (state) {
    return state.count
  },
  evenOrOdd (state) {
    return state.count % 2 ==0 ? '偶数' : '奇数'
  }
}

//暴露Vuex.Store  实例对象
export default new Vuex.Store({
  getters,
  mutations,
  actions,
  state
})

