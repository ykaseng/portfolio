<template>
  <div class="contact-container">
    <div class="name">
        <b>Ka Seng</b>
    </div>
    <Title title="Contact Info" />
    <Label title="email" description="me@ykaseng.com" />
    <Label title="matrix" description="@Kr8iomyMjgbXD3Hr" style="max-height: 1.5em" />
    <Label title="location" description="63°25'59.99&quot;N 10°53'59.99&quot;E" style="height: 3em" />
    <b>ADDITIONAL INFO</b>
    <Label title="age" description="28" />
    <Label title="gender" description="male" />
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