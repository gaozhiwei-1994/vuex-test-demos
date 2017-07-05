<template>
    <div>
      <h2>Products</h2>
      <ul v-for="p in products">
        <li>
          {{p.title}}--{{p.price | currency}}
        <p @click="addToCart(p)"><button :disabled="p.inventory===0">Add to cart</button></p>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    //初始化显示
    created () {
      this.$store.dispatch('getProducts')
    },
    //计算属性
    computed: mapGetters(['products']), //商品 列表
    methods: mapActions(['addToCart']) //添加到  购物车
  }
</script>

<style>

</style>
