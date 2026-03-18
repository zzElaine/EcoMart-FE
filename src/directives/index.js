//定义懒加载指令
import { useIntersectionObserver } from '@vueuse/core';
export const lazyPlugin = {
  install(app) {//传入app实例
    app.directive('img-lazy', {
      mounted(el, binding) {
        //el:指令绑定的元素 img
        //binding:binding.value 指令绑定的值 图片url
        // console.log(el, binding.value)
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting)
            console.log('懒加载成功')
            if (isIntersecting) {
              el.src = binding.value
              stop()//停止监听
            }
          },
        )
      }
    })
  }


}