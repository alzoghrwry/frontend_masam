<template>
  <body class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col ">
    <div class="grid grid-rows-[auto_auto_auto_1fr_auto] h-full ">
<Header/>
<About/>
<Footer/>
</div>
</body>
  </template>



  <script setup>
import Header from '@/components/Header.vue'
import About from '@/components/About-us.vue'

import Footer from '@/components/Footer.vue'

</script>