import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import GeneralTasksUser from '../views/GeneralTasksUser.vue'
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
      component: GeneralTasksUser
    },
    {
      path: '/taskedit/:task_id?',
      name: 'taskedit',
      component: TaskEdit
    }
  ]
})

export default router
