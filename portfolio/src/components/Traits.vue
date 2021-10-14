<template>
  <div class="traits-container">
    <TitleAlt title="hobbies" />
    <LabelAlt description="Reading" />
    <LabelAlt description="Ricing" />
    <LabelAlt description="Keyboards" />
  </div>
</template>

<script>
import TitleAlt from '@/components/TitleAlt'
import LabelAlt from '@/components/LabelAlt'

export default {
    name: 'Traits',
    components: {
        TitleAlt,
        LabelAlt
    }
}
</script>

<style scoped>
@keyframes slideDown {
    from { visibility: hidden; }
    to { visibility: visible;  }
}

.traits-container .container {
  visibility: hidden;
  animation: slideDown .1s steps(1);
  animation-fill-mode: forwards;
}

.traits-container .container:nth-child(2) {
  animation-delay: 1.5s;
}
.traits-container .container:nth-child(3) {
  animation-delay: 1.6s;
}
.traits-container .container:nth-child(4) {
  animation-delay: 1.7s;
}

.traits-container .container:not(:last-child) {
  margin-bottom: 1em;
}
</style>