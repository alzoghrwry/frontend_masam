import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/view/Home.vue'
import About from '@/view/About.vue'
import News from '@/view/News.vue'
import Story from '@/view/Story.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/view/About', name: 'About', component: About },
  { path: '/view/News', name: 'News', component: News },
  { path: '/view/Story', name: 'Story', component: Story },
  {
  path: '/stories/:id',
  name: 'success-details',
  component: () => import('@/view/detials.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
