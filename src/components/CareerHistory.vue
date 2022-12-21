<template>
  <div class="container">
    <TitleBase title="Career History" />
    <template v-for="(career, i) in careers" :key=i>
      <LabelBase :title=career.employer :description=career.duration />
      <DescriptionBase class="description" :description=responsibility v-for="(responsibility, j) in career.responsibilities"
        :key=j :style=animationDelay(i,j) />
    </template>
  </div>
</template>

<script>
import TitleBase from '@/components/TitleBase'
import LabelBase from '@/components/LabelBase'
import DescriptionBase from '@/components/DescriptionBase'

export default {
  name: 'CareerHistory',
  components: {
    TitleBase,
    LabelBase,
    DescriptionBase
  },
  props: {
    careers: Object
  },
  methods: {
    animationDelay(i,j) {
      return {
        'animation-delay': i*0.3+j*0.1+1.8+'s'
      }
    }
  }
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    visibility: hidden;
  }

  to {
    visibility: visible;
  }
}

.container {
  max-width: unset;
  animation-name: v-bind(descriptions);
}

:deep(.description-container) {
  float: left;
  justify-content: flex-start;
}

.description {
  overflow: hidden;
  visibility: hidden;
  animation: slideDown .1s steps(1);
  animation-fill-mode: forwards;
}

</style>