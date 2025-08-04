<template>
     <div class="top-bar bg-gray-700 dark:bg-gray-800 h-10 flex justify-between items-center px-4">
      <div class="language">
        <button class="text-white">English</button> 
      </div>
  <button @click="toggleTheme" class="text-white">
    <i v-if="isDark" class="fas fa-moon text-white"></i>
    <i v-else class="fas fa-sun text-yellow-400"></i>
  </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

    const isDark = ref(false)

    const toggleTheme = () => {
      isDark.value = !isDark.value

      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
    }


    onMounted(() => {
      const savedTheme = localStorage.theme
      if (savedTheme === 'dark') {
        isDark.value = true
        document.documentElement.classList.add('dark')
      }
    })

   
 

</script>
