<template>
  <div class="row g-0">
    <div class="contact-col col col-12 col-md-4">
      <Contact />
    </div>
    <div class="skills-col col col-12 col-md-8">
      <Skills />
    </div>
  </div>
  <div class="row g-0">
    <div class="background-col col col-12 col-md-8">
      <Background />
    </div>
    <div class="traits-col col col-12 col-md-4">
      <Traits />
    </div>
  </div>
  <div class="row g-0">
    <div class="career-col col col-12">
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
@media screen and (min-width: 768px) {
  .contact-col, .background-col {
    padding-right: 1em;
  }
}
</style>