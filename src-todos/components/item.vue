<template>
  <div>
    <li @mouseenter="showBtn(true)" @mouseleave="showBtn(false)" :style="{background: bgColor}">
      <label>
        <input type="checkbox" v-model="todo.complete"/>
        <span>{{todo.content}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="removeTodo">删除</button>
    </li>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object
    },
    //初始化数据
    data () {
      return {
        isShow: false,
        bgColor: 'white'
      }
    },
    methods: {
      //删除按钮显示隐藏
      showBtn (isShow) {
        this.isShow = isShow
        this.bgColor = isShow ? 'gray' : 'white'
      },
      //删除todo
      removeTodo () {
        if(confirm(`确认删除${this.todo.content}吗？`)){
          this.$store.dispatch('removeTodo',this.todo)
        }
      }
    }
  }
</script>

<style>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
