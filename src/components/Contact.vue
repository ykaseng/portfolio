<template>
  <div class="contact-container">
    <Title title="contact info" />
    <Label title="whoami" description="ka seng" />
    <Label title="email" description="root@ykaseng.com" style="max-height: 1.5em" />
    <Label title="mastodon" description="@A2XNL2ngjdHaHK77" style="max-height: 1.5em" />
    <Label title="matrix" description="@Kr8iomyMjgbXD3Hr" style="max-height: 1.5em" />
    <Label title="location" description="63°25'59.99&quot;N 10°53'59.99&quot;E" style="height: 3em" />
    <Title title="secure contact" />
    <Label title="pgp key" description="" />
    <pre>curl https://ykaseng.com/pgp.pub | gpg --import</pre>
    <Label title="fingerprint" description="" />
    <pre>1153 92d5 cb68 dac2 a353 886f 8d08 135f 9a68 a716</pre>
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
pre {
  background-color: var(--BLK-COLOR);
  border: 1px solid var(--WHT-COLOR);
  padding: 7.5px;
}
</style>