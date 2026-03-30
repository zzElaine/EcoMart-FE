//封装倒计时逻辑函数
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { onUnmounted } from 'vue'


export const useCountDown = ( )=>{
  //1.响应式数据
  const time = ref(0)
  let timer = null
  //格式化时间为时分秒
  const formatTime =  computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
  //2.倒计时函数
  const start = (currentTime)=>{
   //开启倒计时的逻辑
   //核心逻辑的编写 每隔 1s 就减 1
   time.value = currentTime
   timer = setInterval(()=>{
    time.value--
   }, 1000)
  }
  //组件销毁时清除定时器
  onUnmounted(()=>{
    timer && clearInterval(timer)
  })

   return {
     formatTime,
     start
   }
}
