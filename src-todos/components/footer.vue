<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectedAll"/>
    </label>
    <span>
      <span>完成{{completedSize}}</span> /全部:{{totalSize}}
    </span>
    <button class="btn btn-danger" v-show="completedSize>0" @click="removeComplete">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {

    //props: ['todos'],

    computed: {
      /*completedSize () {
        return this.$store.getters.completedSize
      },
      totalSize () {
        return this.$store.getters.totalSize
      },*/
      ...mapGetters(['completedSize','totalSize']),
      selectedAll: {
        get () {
          return this.$store.getters.isAllComplete
        },
        set (value) {
          this.$store.dispatch('updateAllTodos',value)
        }
      }
    },
    methods: mapActions({
      removeComplete: 'removeCompleted'
    })
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
