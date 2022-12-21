<template>
  <div class="container row g-0">
      <div class="title-container col">
          <i/>
      </div>
      <div class="description-container col">
          <p class="description">{{ description }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LabelAlt',
    props: {
        title: String,
        description: String
    },
}
</script>

<style scoped>
.container {
    text-transform: uppercase;
    border: 1px solid var(--WHT-COLOR);
}

.title-container {
  position: relative;
    width: 1em;
    flex-grow: 1;
    border-right: 1px solid var(--WHT-COLOR);
    background: var(--GRN-COLOR);
}

.title-container i {
  position: absolute;
  left: -6px;
  bottom: -6px;
  width: 12px;
  height: 12px;
  border-bottom: 1px solid var(--WHT-COLOR);
  background-color: var(--BG-COLOR);
  transform: rotate(-135deg);
}

.description-container {
    text-align: right;
    flex-grow: 5;
}

.title, .description {
    padding: .75em;
    overflow: hidden;
    white-space: nowrap;
}

@media screen and (min-width: 768px) {
  .title-container {
    flex-grow: 1;
  }

  .description-container {
    flex-grow: 4;
  }
}
</style>