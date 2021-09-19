<template>
  <div class="container">  
    <Title title="Career History" />
    <Label title="vinda group sea" description="2018-2021" />
    <Label title="rhino designs" description="2017-2018" />
    <Label title="zalora malaysia" description="2013-2014" />
  </div>
</template>

<script>
import Title from '@/components/Title'
import Label from '@/components/Label'

export default {
    name: 'Career',
    components: {
        Title,
        Label
    }
}
</script>

<style>
.container {
  max-width: unset;
}
</style>