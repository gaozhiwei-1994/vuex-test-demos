<template>
    <div>
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in cartProducts">
          {{item.title}}--${{item.price}}x{{item.count}}
      </li>
      </ul>
      <p>Total: {{totalPrice}}</p>
      <p>
        <button @click="checkout" :disabled="cartProducts.length===0">checkout</button>
      </p>
      <p v-show="checkoutStatus">checkout {{checkoutStatus}}</p>
    </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    computed: {
      //既有组件内部定义计算属性 又有getters计算属性  写法
      ...mapGetters({
        cartProducts: 'cartProduts', //购物车商品列表
        checkoutStatus: 'checkoutStatus' // 下单提交 提示信息
      }),
      // 购物车 总价格
      totalPrice () {
        return this.cartProducts.reduce((pretotal,item)=>{ //统计
          return pretotal + item.price * item.count
        }, 0)
      }
    },
    //点击下单提交
    methods: mapActions(['checkout'])
  }
</script>

<style>

</style>
