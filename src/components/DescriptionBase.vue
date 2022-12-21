<template>
  <div class="container row g-0">
      <div class="description-container col col-12">
          <p class="description">{{ description }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'DescriptionBase',
    props: {
        description: String
    },
}
</script>

<style scoped>
.description-container {
    text-transform: uppercase;
    padding-left: 2em;
}
</style>