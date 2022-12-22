<template>
  <button :disabled="clickable ? disabled : ''" :class="active ? 'active' : ''" type="button">
    <span>{{ label }}</span><i></i>
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
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
  background: var(--black-color);
  color: var(--white-color);
  /* height: 55px; */
  width: 3em;
  line-height: 1em;
  border: 1px solid var(--white-color);
}

button.active, button:hover {
  background: var(--white-color);
  color: var(--black-color);
}

button i {
  position: absolute;
  left: -6px;
  bottom: -6px;
  width: 12px;
  height: 12px;
  border-bottom: 1px solid var(--white-color);
  background-color: var(--bg-color);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>