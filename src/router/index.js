import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Jobs from '@/views/Jobs.vue'
import NotFound from '@/views/NotFound.vue'
import JobDetails from '@/views/JobDetails.vue'
import AddJob from '@/views/AddJob.vue'
import EditJob from '@/views/EditJob.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'Job',
      component: JobDetails,
    },
    {
      path: '/jobs/add',
      name: 'Add Job',
      component: AddJob,
    },
    {
      path: '/jobs/edit/:id',
      name: 'Edit Job',
      component: EditJob,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
