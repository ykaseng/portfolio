<template>
  <div class="container row g-0">
      <div class="description-container col col-12">
          <p class="description">{{ description }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Description',
    props: {
        description: String
    },
}
</script>

<style scoped>
.description-container {
    text-transform: uppercase;
    margin: 0 2em;
}

.description-container p {
    margin-bottom: unset;
    max-width: 80%;
}
</style>