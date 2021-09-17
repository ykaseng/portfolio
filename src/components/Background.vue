<template>
  <div class="background-container">
    <Title title="Background Check" />
    <h1>This is a background page</h1>
  </div>
</template>

<script>
import Title from '@/components/Title'

export default {
    name: 'Background',
    components: {
        Title
    }
}
</script>

<style>
.background-container {
    margin: 0 1em 0 0;
}
</style>