<template>
  <div class="container">
    <Title title="Background Check" />
    <b>EDUCATION</b>
    <Label title="university of tasmania" description="2014-2016" />
      <Description description="(ba) information and communications technology" />
    <b>AWARDS</b>
    <Label title="govhack" description="2017" />
      <Description description="participation" />
    <Label title="uhack tasmania, open division" description="2016" />
      <Description description="1st runner up" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Label from '@/components/Label'
import Description from '@/components/Description'

export default {
  name: 'Background',
  components: {
      Title,
      Label,
      Description
  }
}
</script>
<style scoped>
@keyframes slideDown {
    from { visibility: hidden; }
    to { visibility: visible;  }
}

::v-deep(.description-container) {
  float: left;
  justify-content: flex-start;
}

::v-deep(.description) {
  overflow: hidden;
  visibility: hidden;
  animation: slideDown .1s steps(1);
  animation-fill-mode: forwards;
}

::v-deep(.container:nth-child(4) .description) {
  animation-delay: 1.5s;
}
::v-deep(.container:nth-child(7) .description) {
  animation-delay: 1.6s;
}
::v-deep(.container:nth-child(9) .description) {
  animation-delay: 1.7s;
}
</style>