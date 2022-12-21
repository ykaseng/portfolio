<template>
  <main>
    <div class="description" v-html=data.blurb />
    <div class="row g-0">
      <div class="contact-col col col-12 col-md-4">
        <ContactInfo v-bind=data.contact />
      </div>
      <div class="skills-col col col-12 col-md-8">
        <TechnicalSkills :skills=data.skills />
      </div>
    </div>
    <div class="row g-0">
      <div class="background-col col col-12 col-md-8">
        <BackgroundCheck :background=data.background />
      </div>
      <div class="traits-col col col-12 col-md-4">
        <PersonalityTraits />
      </div>
    </div>
    <div class="row g-0">
      <div class="career-col col col-12">
        <CareerHistory :careers=data.careers />
      </div>
    </div>
  </main>
</template>

<script>
import ContactInfo from '@/components/ContactInfo'
import BackgroundCheck from '@/components/BackgroundCheck'
import TechnicalSkills from '@/components/TechnicalSkills'
import PersonalityTraits from '@/components/PersonalityTraits'
import CareerHistory from '@/components/CareerHistory'

export default {
  name: 'AboutContent',
  components: {
    ContactInfo,
    BackgroundCheck,
    TechnicalSkills,
    PersonalityTraits,
    CareerHistory
  },
  props: {
    data: Object
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px) {

  .skills-col,
  .traits-col {
    padding-left: 1em;
  }
}

main {
  margin: 1em auto;
}

.description {
  margin-top: 1em;
}
</style>