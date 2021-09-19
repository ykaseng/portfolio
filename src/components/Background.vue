<template>
  <div class="background-container">
    <Title title="Background Check" />
    <b>EDUCATION</b>
    <Label title="university of tasmania" description="2014-2016" />
    <b>AWARDS</b>
    <Label title="govhack" description="2017" />
    <Label title="uhack tasmania, open division" description="2016" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Label from '@/components/Label'

export default {
    name: 'Background',
    components: {
        Title,
        Label
    }
}
</script>

<style>
.background-container {
    margin: 0 1em 0 0;
}
</style>