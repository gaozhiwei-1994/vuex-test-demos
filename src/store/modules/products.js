
import {RECEIVE_PRODUCTS,ADD_TO_CART} from '../types'
import shop from '../../api/shop'

//产品状态
const state = {
  products: []
}

const mutations = {
  //拿到模拟后台数据
  [RECEIVE_PRODUCTS] (state,{products}) {
    state.products = products
  },
  //点击时 传递的id相同，使库存减一
  [ADD_TO_CART] (state,{id}) {
    state.products.find((p)=>p.id===id).inventory--
    console.log(1111)
  }
}

const actions = {
  //获取  后台模拟的 数据列表
  getProducts ({commit}) {
    shop.getProducts(products=>{
      commit(RECEIVE_PRODUCTS,{products})
    })
  }
}

const getters = {
  //计算显示  产品列表
  products (state) {
    return state.products
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
