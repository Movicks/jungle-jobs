<script setup>
import { defineProps, onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import JobListing from './JobListing.vue'
import { VueSpinnerBounce } from 'vue3-spinners'
import { dummyDatasBase } from '@/dummyStore/data'

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})
const state = reactive({
  jobs: [],
  isLoading: true,
})

onMounted(async () => {
  const dummyDelayTime = 1500
  setTimeout(() => {
    state.jobs = dummyDatasBase.getItems()
    state.isLoading = false
  }, dummyDelayTime)
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10 flex flex-col items-center gap-4">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 !mb-6 text-center">Browse Jobs</h2>
      <!-- show loading spinner -->
      <div
        v-if="state.isLoading"
        class="flex items-center justify-center text-green-900 opacity-30 py-6"
      >
        <VueSpinnerBounce class="size-20" />
      </div>

      <!-- show loaded details -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="`${job.id}`"
          :job="job"
        />
      </div>
    </div>
    <section class="m-auto w-full max-w-lg my-10 px-6" v-if="showButton && !state.isLoading">
      <RouterLink
        to="/jobs/"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
  </section>
</template>
