//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import './styles/common.scss'

// //测试接口函数
// import{getCategory} from '@/apis/testAPI'
// //测试接口调用
// getCategory().then(res => {
//   console.log(res)
// })

//引入懒加载指令插件
import { lazyPlugin } from '@/directives'
//引入全局组件插件
import { componentPlugin } from '@/components'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(lazyPlugin)
app.use(componentPlugin)
