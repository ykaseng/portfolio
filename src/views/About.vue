<template>
  <div class="row g-0">
    <div class="col col-12 col-md-6">
      <Contact />
    </div>
    <div class="col col-12 col-md-6">
      <Skills />
    </div>
  </div>
  <div class="row g-0">
    <div class="col col-12 col-md-8">
      <Background />
    </div>
    <div class="col col-12 col-md-4">
      <Traits />
    </div>
  </div>
  <div class="row g-0">
    <div class="col col-12">
      <Career />
    </div>
  </div>
</template>

<script>
import Contact from '@/components/Contact'
import Background from '@/components/Background'
import Skills from '@/components/Skills'
import Traits from '@/components/Traits'
import Career from '@/components/Career'

export default {
  name: 'About',
  components: {
    Contact,
    Background,
    Skills,
    Traits,
    Career
  }
}
</script>

<style scoped>
</style>