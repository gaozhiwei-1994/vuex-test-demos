
var key = 'todos'

export  default {
  read () {
    return JSON.parse(localStorage.getItem(key) || '[]')
  },
  save (todos) {
    return localStorage.setItem(key,JSON.stringify(todos))
  }
}
