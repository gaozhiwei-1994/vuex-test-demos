//引入定义变量
import {ADD_TO_CART} from './types'
//暴露 对象
export default {
  //方法 ： 如果存在库存，调用 添加到购物车的函数
  addToCart ({commit},p) {
    if(p.inventory){
      commit(ADD_TO_CART,{id: p.id})
    }
  }
}
