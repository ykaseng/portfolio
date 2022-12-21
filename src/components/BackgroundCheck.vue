<template>
  <div class="container">
    <TitleBase title="Background Check" />
    <template v-for="(val, key, i) in background" :key=key>
      <b>{{ key.toUpperCase() }}</b>
      <template v-for="(v, j) in val" :key="v">
        <LabelBase :title=v.where :description=v.when />
        <DescriptionBase class="description" :description=v.what :style=animationDelay(i,j) />
      </template>
    </template>
  </div>
</template>

<script>
import TitleBase from '@/components/TitleBase'
import LabelBase from '@/components/LabelBase'
import DescriptionBase from '@/components/DescriptionBase'

export default {
  name: 'BackgroundCheck',
  components: {
    TitleBase,
    LabelBase,
    DescriptionBase
  },
  props: {
    background: Object
  },
  methods: {
    animationDelay(i,j) {
      return {
        'animation-delay': i*0.1+j*0.1+1.5+'s'
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