import {
  RECEIVE_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED,
  UPDATE_ALL_TODOS
} from './types'
import LOCAL from '../util/local'
export default {
  //添加 todo
  addTodos ({commit},todo) {
    commit(ADD_TODO,{todo})
  },
  //删除指定
  removeTodo ({commit},todo) {
    commit(REMOVE_TODO,{todo})
  },
  //删除所有选中
  removeCompleted ({commit}) {
    commit(REMOVE_COMPLETED)
  },
  //选中所有
  updateAllTodos ({commit},complete) {
    commit(UPDATE_ALL_TODOS,{complete})
  },
  //从localstroage  读取数据
  readTodos ({commit}) {
    setTimeout(()=>{
      const todos = LOCAL.read()
      commit(RECEIVE_TODOS,{todos})
    },1000)
  }
}
