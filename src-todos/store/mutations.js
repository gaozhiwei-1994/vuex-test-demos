import {
  RECEIVE_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_COMPLETED,
  UPDATE_ALL_TODOS
} from './types'

export default {
  // obj.name obj[name]
  //添加
  [ADD_TODO] (state,{todo}) {
    state.todos.unshift(todo)
  },
  //删除 指定
  [REMOVE_TODO] (state,{todo}) {
    const index = state.todos.indexOf(todo)
    state.todos.splice(index,1)
  },
  //删除  所有选中的
  [REMOVE_COMPLETED] (state) {
    state.todos = state.todos.filter(todo=> !todo.complete)
  },
  //选中所有
  [UPDATE_ALL_TODOS] (state,{complete}) {
    state.todos.forEach(todo=>{
      todo.complete = complete
    })
  },
  //  从localstroage读取的，赋给状态
  [RECEIVE_TODOS](state,{todos}) {
    state.todos = todos
  }
}
