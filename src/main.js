//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import './styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'

// //测试接口函数
// import{getCategory} from '@/apis/testAPI'
// //测试接口调用
// getCategory().then(res => {
//   console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局指令
//图片懒加载指令
app.directive('img-lazy', {
  mounted(el, binding) {
    //el:指令绑定的元素 img
    //binding:binding.value 指令绑定的值 图片url
    console.log(el, binding.value)
    useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        console.log(isIntersecting)
        if (isIntersecting) {
          el.src = binding.value
        }
      },
    )
  }
})

