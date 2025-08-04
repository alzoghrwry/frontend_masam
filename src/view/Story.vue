<template>
  <div class="grid grid-rows-[auto_auto_auto_1fr_auto] h-full">
    <Header />
    <TopbarSection />
    <Pegnation endpoint="http://localhost:3001/stories" title="قصص النجاح"/>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Pegnation from '@/components/Pegnation.vue';
</script>