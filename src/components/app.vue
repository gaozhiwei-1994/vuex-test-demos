<template>
    <div>
      <h1>Shopping Cart Example</h1>
      <products></products>
      <hr>
      <cart></cart>
    </div>
</template>

<script>
  import cart from './cart.vue'
  import products from './products.vue'
  //主要  是一个  组合组装的  功能
  export default {
    components: {
      cart,
      products
    }
  }
</script>

<style>

</style>
