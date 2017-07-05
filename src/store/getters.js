
export default {
  //计算属性--最终返回 购物车需要的4个商品信息
  cartProduts (state) {
    //替换 map
    return state.cart.items.map(({id,count})=>{ //item.id   item.count
      //返回表达式为true的  p
      var p = state.products.products.find(p=>p.id === id) //返回p对象
      //返回  cart 需要的  数据
      return {
        id,
        count,
        title: p.title,
        price: p.price
      }
    })
}
}
