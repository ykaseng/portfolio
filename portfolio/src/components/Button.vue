<template>
  <button :disabled="clickable ? disabled : ''" :class="active ? 'active' : ''" type="button">
    <span>{{ label }}</span><i></i>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    clickable: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
button {
  text-align: right;
  position: relative;
  text-transform: uppercase;
  background: var(--BG-COLOR);
  color: var(--WHT-COLOR);
  /* height: 55px; */
  width: 3em;
  line-height: 1em;
  border: 1px solid var(--WHT-COLOR);
}

button.active {
  background: var(--WHT-COLOR);
  color: var(--BLK-COLOR);
}

button i {
  position: absolute;
  left: -6px;
  bottom: -6px;
  width: 12px;
  height: 12px;
  border-bottom: 1px solid var(--WHT-COLOR);
  background-color: var(--BG-COLOR);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>