<script setup>
import BackButton from '@/components/BackButton.vue'
import { dummyDatasBase } from '@/dummyStore/data'
import { onMounted, reactive } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { VueSpinnerBounce } from 'vue3-spinners'

const toast = useToast()
const route = useRoute()
const router = useRouter()
const jobId = route.params.id
const state = reactive({
  isLoading: true,
})

const handleDelete = () => {
  const confirm = window.confirm('Are you sure you want to delete this job?')
  if (confirm) {
    dummyDatasBase.delete(parseInt(`${jobId}`))
    toast.success('job has been deleted sucessfully')
    router.push('/jobs')
  }
}

onMounted(async () => {
  const dummyDelayTime = 1500
  setTimeout(() => {
    state.job = dummyDatasBase.getItemById(parseInt(`${jobId}`))
    state.isLoading = false
  }, dummyDelayTime)
})
</script>

<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-green-50 w-full">
    <div class="w-full max-w-6xl m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70 w-full gap-6">
        <main>
          <div class="bg-white mb-2 p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ state.job?.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job?.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-map-marker text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.job?.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

            <p class="mb-4">
              {{ state.job?.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ state.job?.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ state.job?.company.name }}</h2>

            <p class="my-2">
              {{ state.job?.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job?.company.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job?.company.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job?.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              @click="handleDelete"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else class="flex items-center justify-center text-green-900 opacity-30 py-6">
    <VueSpinnerBounce class="size-20" />
  </div>
</template>
