// 封装购物车模块

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'


export const useCartStore = defineStore('cart', () => {
  // 1. 定义state - cartList
  const cartList = ref([])
  // 2. 定义action - addCart
  const addCart = (goods) => {
    console.log('添加', goods)
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    //item表示cartList中的每一组数据 find函数传入
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }
  // 删除购物车
  const delCart = async (skuId) => {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // 2. 使用数组的过滤方法 - filter
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)//1表示删除1个元素
  }
  //单选功能
  const singleChecked = (skuId,selected) => {
    const item = cartList.value.find((item)=>item.skuId === skuId)
    item.selected = selected
    //store cartList数组 无法知道要修改谁的选中状态
    // 除了selected补充一个用来筛选的参数 skuId
  }

  //计算属性
  //1. 总数量
  const totalCount = computed(() => //reduce方法累加所有商品的数量count属性
    cartList.value.reduce((pre, cur) => pre + cur.count, 0))
  //2. 总价格
  const totalPrice = computed(() => 
    cartList.value.reduce((pre, cur) => pre + cur.price * cur.count, 0))

  //是否全选
  //every方法判断是否所有商品都选中
  const isAll = computed(( )=> cartList.value.every(item => item.selected))
  
  //全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }


  return {
    cartList,
    addCart,
    delCart, 
    totalCount, 
    totalPrice,
    singleChecked,
    isAll,
    allCheck
  }
}, {
  persist: true,
})