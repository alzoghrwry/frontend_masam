


<template>
  <div class="grid grid-rows-[auto_auto_auto_1fr_auto] h-full">
    <Header />
    
      
  <div class="p-6 max-w-3xl mx-auto dark:bg-primary">
    <h1 class="text-3xl font-bold mb-4 dark:text-white">{{ story?.title }}</h1>
    <p class="text-sm text-green-500 mb-2">{{ story?.date }}</p>
    <img :src="story?.image" alt="صورة" class="w-full h-64 object-cover rounded mb-4" />
    <p class="text-lg leading-relaxed dark:text-gray-300">{{ story?.content }}</p>

    <div v-if="!story" class="text-center text-red-500 mt-8">
      لا يوجد تفاصيل متاحة لهذا العنصر.
    </div>
  </div>





    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'

import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const story = ref(null)

onMounted(async () => {
  const id = route.params.id
  const res = await fetch(`http://localhost:3001/stories/${id}`)
  if (res.ok) {
    story.value = await res.json()
  }
})
</script>
