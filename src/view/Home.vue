
<template>
  <div class="grid grid-rows-[auto_auto_auto_1fr_auto] h-full">
    <Header />
    <HeroSection/>
    <ProjectStats/>
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'

import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import ProjectStats from '@/components/ProjectStats.vue'
import HeroSection from '@/components/HeroSection.vue'
</script>
