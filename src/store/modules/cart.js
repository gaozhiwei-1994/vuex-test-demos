
import shop from '../../api/shop'
import {ADD_TO_CART,
        CHECKOUT_REQ,
        CHECKOUT_SUCCESS,
        CHECKOUT_FAILURE
} from '../types'

//初始化购物车 数据库
const state = {
  items: [],   // 每个元素对象: id/count
  checkoutStatus: null
}

const mutations = {
  //添加到 购物车 商品
  [ADD_TO_CART] (state,{id}) {
    //返回表达式为 true 的
    const item = state.items.find((item)=>item.id===id)
    if(item){
      //数量增加
      item.count++
    }else{
      //或者 增加新商品
      state.items.unshift({
        id,
        count: 1
      })
    }
  },
  //点击提交的 第一状态
  [CHECKOUT_REQ] (state) {
    state.items = [] //不显示商品列表
    state.checkoutStatus = null //不显示 提示信息
  },
  //成功状态
  [CHECKOUT_SUCCESS] (state) {
    //改变checkoutStatus 状态
    state.checkoutStatus = '下单完成'
  },
  //失败状态
  [CHECKOUT_FAILURE] (state,{items}) {
    state.items = items  //提交失败 继续显示 商品列表
    //改变checkoutStatus 状态
    state.checkoutStatus = '提交失败'
  }
}

const actions = {
  //下单提交的 方法
  checkout ({commit},cartProducts) {
    /*
    * [...state.items] 生成一个新数组 items指向
    * 提交的第一状态将state.items = [] 此时 state.items原本只向的商品列表数组已经成为垃圾对象
    * 所以这里利用[...state.items]生成新的数组，和之前的商品列表数组中元素一样
    * 一旦提交失败，会将items指向的新数组 赋回给 state.items
    * */
    const items = [...state.items]      // state.items
    commit(CHECKOUT_REQ)
    shop.buyProducts(
      cartProducts,
      ()=>commit(CHECKOUT_SUCCESS),
      ()=>commit(CHECKOUT_FAILURE,{items})
    )
  }
}

const getters = {
  //计算checkoutStatus 的状态
  checkoutStatus () {
    return state.checkoutStatus
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}


