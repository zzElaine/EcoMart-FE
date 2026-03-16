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

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//引入懒加载指令插件
import { lazyPlugin } from '@/directives'
app.use(lazyPlugin)

