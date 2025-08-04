<template>
  <div>
    <div class="w-full bg-gradient-to-r from-primary to-[#28a7455c] h-[60px] text-white text-center text-3xl">
      <h1>{{ title }}</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <SuccessCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>

    <div v-if="error" class="text-red-600 text-center mt-6 dark:text-red-400">
      تعذر تحميل البيانات
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SuccessCard from '@/components/SuccessCard.vue'

const props = defineProps({
  endpoint: { type: String, required: true },
  title: { type: String, default: 'قصص النجاح' }
})

const items = ref([])
const error = ref(false)

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
