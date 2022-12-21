<template>
  <div class="contact-container">
    <TitleBase title="contact info" />
    <LabelBase v-for="(val, key, index) in contactInfo" :key=key :title=key :description=val
      v-bind:style="[index === Object.keys(contactInfo).length - 1 ? 'height: 3em' : 'height: 1.5em']" />

    <TitleBase title="secure contact" />
    <template v-for="(value, key, index) in secureContactInfo" :key=index>
        <LabelBase :title="key" description="" />
        <pre>{{ value }}</pre>
    </template>
  </div>
</template>

<script>
import TitleBase from '@/components/TitleBase'
import LabelBase from '@/components/LabelBase'

export default {
  name: 'ContactInfo',
  components: {
    TitleBase,
    LabelBase
  },
  props: {
    contactInfo: Object,
    secureContactInfo: Object
  }
}
</script>