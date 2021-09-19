<template>
  <div class="container row g-0">
      <div class="title-container col">
          <p class="title">{{ title }}</p>
      </div>
      <div class="description-container col">
          <p class="description">{{ description }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Label',
    props: {
        title: String,
        description: String,
        chars: {
            default: '!<>-_\\/[]{}—=+*^?#________',
            type: String            
        }
    },
}
</script>

<style scoped>
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

.container {
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
}

.container p {
    margin-bottom: unset;
}

.description-container {
    float: right;
    text-align: right;
}

.title-container, .description-container {
    flex-wrap: nowrap;
}

.title, .description {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3.5s steps(30, end) 2s;
    animation-fill-mode: forwards;
}
</style>