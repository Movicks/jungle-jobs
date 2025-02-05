<script setup>
import logo from '@/assets/logo.svg'
import { RouterLink, useRoute } from 'vue-router'
const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav
    class="bg-green-700 border-b border-green-500 sticky top-0 z-10 shadow-lg shadow-green-500/15"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center md:items-stretch justify-between">
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Jungle Jobs</span>
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2 gap-2">
              <RouterLink
                to="/"
                :class="[
                  'text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2',
                  isActiveLink('/') ? 'bg-green-900 text-white' : '',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="[
                  'text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2',
                  isActiveLink('/jobs') ? 'bg-green-900 text-white' : '',
                ]"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/jobs/add"
                :class="[
                  'text-white hover:bg-green-900 hover:text-white rounded-md px-3 py-2',
                  isActiveLink('/jobs/add') ? 'bg-green-900 text-white' : '',
                ]"
                >Add job</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
