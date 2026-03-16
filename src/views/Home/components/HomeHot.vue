<script setup>
//代码依赖 <script setup> 的自动导入和自动注册特性
// 所以必须加上 setup 才能正常工作。
import HomePannel from './HomePannel.vue'
</script>
<template>
  <div>
    <!-- 热门推荐 -->
    <HomePannel title="热门推荐" subTitle="更多">
      <div >
        我是热门推荐快来选购啊
      </div>
    </HomePannel>
  </div>
</template>