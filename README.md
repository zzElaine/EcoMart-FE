```markdown
# 🛒 EcoMart -  Vue3 电商平台前端

> 一个基于 Vue3 全家桶开发的现代化电商前端项目，涵盖完整的购物流程：商品浏览、购物车、订单管理、支付结算等核心功能。

## ✨ 核心功能

### 用户端
- 🔐 用户登录/注册（Token 认证 + 持久化）
- 🏠 首页展示：分类导航、轮播图、新鲜好物、人气推荐、商品面板
- 📂 分类页：一级/二级分类、面包屑导航、无限滚动加载
- 🔍 商品详情：图片预览（放大镜效果）、SKU 规格选择、热榜推荐
- 🛒 购物车：添加/删除/修改数量、单选/全选、总价统计、本地与接口智能切换
- 📦 订单管理：订单创建、地址git add README.md切换、支付倒计时
- 💳 支付功能：支付宝沙箱支付、支付结果回调处理
- 👤 会员中心：个人信息展示、我的订单（Tab 切换 + 分页）

### 技术亮点
- ⚡ **组合式 API**：业务逻辑封装为 `useXXX` 钩子，高复用性
- 🗃️ **Pinia 状态管理**：用户信息、购物车、分类数据，支持持久化存储
- 🧩 **组件化设计**：通用组件（GoodsItem、ImageView、SKU、HomePanel）+ 全局插件化注册
- 🖼️ **图片懒加载**：基于 `@vueuse/core` 的 `IntersectionObserver` 实现
- 📜 **无限滚动**：二级分类页商品列表滚动加载更多
- 🧭 **路由优化**：滚动行为定制、缓存问题解决（`onBeforeRouteUpdate`）
- 🔌 **请求封装**：Axios 拦截器自动携带 Token，统一处理 401 错误
- 📱 **响应式布局**：SCSS + 移动端适配

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 核心框架 | Vue 3 (Composition API + `<script setup>`) |
| 构建工具 | Vite |
| 状态管理 | Pinia + pinia-plugin-persistedstate |
| 路由 | Vue Router 4 |
| UI 组件库 | Element Plus |
| HTTP 请求 | Axios |
| 工具库 | @vueuse/core, dayjs |
| 样式 | SCSS + 阿里图标库 |
| 代码规范 | ESLint + Prettier (推荐配置) |

---

## 🚀 快速开始

### 环境要求
- Node.js ≥ 16.0
- npm 或 pnpm

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/your-username/eco-mart.git

# 2. 进入项目目录
cd eco-mart

# 3. 安装依赖
npm install
# 或
pnpm install

# 4. 启动开发服务器
npm run dev

# 5. 构建生产版本
npm run build

# 6. 预览生产构建
npm run preview
```

### 环境变量配置

创建 `.env.development` 文件：

```env
VITE_API_BASE_URL=http://pcapi-xiaotuxian-front-devtest.itheima.net
VITE_ALIPAY_REDIRECT_URL=http://localhost:5173/paycallback
```

---

## 📖 主要功能模块说明

### 1. 购物车模块
- 未登录状态：数据存储在 Pinia + localStorage
- 登录状态：自动同步到后端接口
- 支持删除、数量修改、单选/全选、总价实时计算

### 2. SKU 规格组件
- 实现幂集算法生成路径字典
- 动态禁用不可选规格
- 产出选中规格对象供父组件使用

### 3. 订单支付
- 创建订单 → 获取订单号 → 跳转支付宝沙箱 → 回调处理
- 支付倒计时封装（可复用 hook）

### 4. 会员中心
- 个人信息展示 + 猜你喜欢推荐
- 我的订单：Tab 切换（全部/待付款/待发货等）+ 分页

---

## 🧪 接口文档

项目使用线上 Mock API：

- 基础地址：`http://pcapi-xiaotuxian-front-devtest.itheima.net`
- 接口清单：
  - `GET /home/category/head` - 首页头部导航
  - `GET /home/banner` - 轮播图
  - `GET /goods` - 商品详情
  - `POST /member/cart` - 加入购物车
  - `GET /member/order` - 订单列表
  - ...（详见代码中 `api/` 目录）

---


## 🙏 致谢

- [Vue3 官方文档](https://cn.vuejs.org/)
- [Pinia 官方文档](https://pinia.vuejs.org/zh/)
- [Element Plus 组件库](https://element-plus.org/)
- 黑马程序员 Vue3 小兔鲜项目 API

---

