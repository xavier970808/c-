import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import 標頭檔 from './views/標頭檔.vue'
import ArticleRead from './views/ArticleRead.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/標頭檔', component: 標頭檔 },
  //{ path: '/articles/read/:id', component: ArticleRead },
  {path: '/articles/read/', component: ArticleRead}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router