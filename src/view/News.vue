<template>
  <div class="grid grid-rows-[auto_auto_auto_1fr_auto] h-full">
    <Header />
   <Pegnation endpoint="http://localhost:3001/news" title=" الأخبار"/>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Pegnation from '@/components/Pegnation.vue';
</script>