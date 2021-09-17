<template>
  <div class="contact-container">
    <div class="name">
        <b>Ka Seng</b>
    </div>
    <Title title="Contact Info" />
    <h1>This is a contact page</h1>
  </div>
</template>

<script>
import Title from '@/components/Title'

export default {
    name: 'Contact',
    components: {
        Title
    }
}
</script>

<style scoped>
.contact-container {
    margin: 0 1em 0 0;
}

.name {
    margin: 1em 0;
}
</style>