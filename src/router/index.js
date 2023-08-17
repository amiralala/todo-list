import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Welcome from '../views/Welcome.vue'
import GeneraltasksUser from '../views/GeneraltasksUser.vue'
import TaskEdit from '../components/TaskEdit.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/taskslist',
      name: 'taskslist',
      component: GeneraltasksUser
    },
    {
      path: '/taskedit/:task_id?',
      name: 'taskedit',
      component: TaskEdit
    }
  ]
})

export default router
