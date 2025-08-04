<template>
    <div class="w-full  bg-gradient-to-r from-primary to-[#28a7455c] h-[60px] text-white text-center text-3xl ">
        <h1>قصص النجاح</h1>
    </div>
  <div class="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="(item, index) in filteredStats"
      :key="index" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img :src="item.image" alt="صورة" class="rounded-t-lg w-full h-48 object-cover" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl  tracking-tight text-gray-900 dark:text-white">
          {{ item.title }}
        </h5>
        <p class="text-sm text-green-500 dark:text-gray-100 mb-2">{{ item.date }}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-300 line-clamp-3">
          {{ item.content }}
        </p>
       
      </div>
    </div>
  </div>

  <div v-if="error" class="text-red-600 text-center mt-6 dark:text-red-400">
    تعذر تحميل البيانات
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'

const stats = ref([])
const error = ref(false)



onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3001/news')
    if (!res.ok) throw new Error('فشل في تحميل البيانات')
    const data = await res.json()
    stats.value = data
  } catch (err) {
    console.error('خطأ في تحميل البيانات:', err)
    error.value = true
  }
})
</script>

