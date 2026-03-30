//axios基础封装
import axios from 'axios'
import {useUserStore} from '@/stores/userStore'
import router from '@/router'
const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:100000
})
//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore();
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const userStore = useUserStore();
  //错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401错误处理
  // 1.清除本地用户数据
  // 2.跳转到登录页
  if(e.response.status === 401){
    userStore.logout()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default httpInstance