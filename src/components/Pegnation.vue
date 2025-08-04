<template>
  <div>
  
    <div class="w-full bg-gradient-to-r from-primary to-[#28a7455c] h-[60px] text-white text-center text-3xl flex items-center justify-center">
      <h1>{{ title }}</h1>
    </div>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <SuccessCard
        v-for="(item, index) in paginatedItems"
        :key="index"
        :item="item"
      />
    </div>

   
    <div class="flex justify-center mt-6 gap-2 flex-wrap">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :class="[
          'px-4 py-2 rounded border transition',
          currentPage === page
            ? 'bg-primary text-white dark:bg-blue-500'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
        ]"
      >
        {{ page }}
      </button>
    </div>

    
    <div v-if="error" class="text-red-600 text-center mt-6 dark:text-red-400">
      تعذر تحميل البيانات
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import SuccessCard from '@/components/SuccessCard.vue'

const props = defineProps({
  endpoint: { type: String, required: true },
  title: { type: String, default: 'قصص النجاح' }
})

const items = ref([])
const error = ref(false)

const currentPage = ref(1)
const itemsPerPage = 6


const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return items.value.slice(start, start + itemsPerPage)
})


const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))


const setPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

onMounted(async () => {
  try {
    const res = await fetch(props.endpoint)
    if (!res.ok) throw new Error('فشل في تحميل البيانات')
    items.value = await res.json()
  } catch (err) {
    console.error('خطأ في تحميل البيانات:', err)
    error.value = true
  }
})
</script>
