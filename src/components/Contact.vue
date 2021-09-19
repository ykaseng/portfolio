<template>
  <div class="contact-container">
    <div class="name">
        <b>Ka Seng</b>
    </div>
    <Title title="Contact Info" />
    <Label title="phone" description="+601161936544" />
    <Label title="email" description="me@ykaseng.com" />
    <Label title="location" description="malaysia" />
    <b>ADDITIONAL INFO</b>
    <Label title="age" description="28" />
    <Label title="phone" description="+601161936544" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Label from '@/components/Label'

export default {
    name: 'Contact',
    components: {
        Title,
        Label
    }
}
</script>

<style scoped>
.name {
    margin-bottom: 1em;
    color: var(--BLK-COLOR);

    width: 70px;
    /* height: 40px; */
    position: relative;
    background: var(--WHT-COLOR);
}

.name::after {
  content: "";
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 0;
  height: 0;
  /* border-right: 10px solid yellow; */
  border-left: 10px solid var(--WHT-COLOR);
  border-top: 15px solid var(--WHT-COLOR);
  border-bottom: 10px solid transparent;
}
</style>