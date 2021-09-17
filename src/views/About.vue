<template>
  <div class="row">
    <Contact />
    <Background />
    <Skills />
    <Traits />
    <Career />
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

<style>

</style>