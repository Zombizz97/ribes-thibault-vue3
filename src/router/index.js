import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AmiiboList from "@/components/AmiiboList.vue";
import AmiiboDetail from "@/components/AmiiboDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: AmiiboList
    },
    {
      path: '/detail/:amiiboId',
      name: 'detail',
      component: AmiiboDetail
    }
  ],
})

export default router
