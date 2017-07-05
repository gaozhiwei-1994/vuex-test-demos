<template>
    <div>
      <p>clicked: {{count}} times , counter is {{evenOrOdd}}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">incrementIfOdd</button>
      <button @click="incrementAsync">incrementAsync</button>
    </div>
</template>

<script>
    /*export default {
      computed: {
        count () {
          return this.$store.getters.count
        },
        evenOrOdd () {
          return this.$store.getters.evenOrOdd
        }
      },
      methods: {
        increment () {
          this.$store.dispatch('increment')
        },
        decrement () {
          this.$store.dispatch('decrement')
        },
        incrementIfOdd () {
          this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync () {
          this.$store.dispatch('incrementAsync')
        }
      }
    }*/

    /*
     mapGetters(): 生成computed对象
     mapActions(): 生成methods对象
     参数:
     ['name1', 'name2']: name既是回调函数名, 也是action函数名
     {cbName: 'actionName'}: 属性名是回调函数名, 属性值是action函数名
     */
    import {mapGetters,mapActions} from 'vuex'
    export default {
      computed: mapGetters(['count','evenOrOdd']),
      methods: mapActions(
        {
          increment: 'increment',
          decrement: 'decrement',
          incrementIfOdd: 'incrementIfOdd',
          incrementAsync: 'incrementAsync'
        }
      )
    }
</script>

<style>

</style>
