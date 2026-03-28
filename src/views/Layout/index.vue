<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

// 触发获取导航列表的action
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getCategory();
});
</script>

<template>
  <div class="layout">
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <RouterView />
    <LayoutFooter />
  </div>
</template>
<style scoped>
.layout {
  display: flex; /* 启用 Flexbox 布局 */
  flex-direction: column; /* 子元素垂直排列（从上到下）*/
}
</style>
