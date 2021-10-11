<template>
  <div class="home">
    <Articles title="--verbose" />
  </div>
</template>

<script>
import Articles from '@/components/Articles'

export default {
  name: 'Home',
  components: {
    Articles
  }
}
</script>

<style scoped>
/deep/ ul {
  padding-left: unset;
}
</style>