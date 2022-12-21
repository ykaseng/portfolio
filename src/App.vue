<template>
  <HeaderBase :title=data.title />
  <AboutContent :data=data />
  <FooterBase :footer=data.footer />
</template>

<script>
import AboutContent from '@/views/AboutContent'
import HeaderBase from '@/components/HeaderBase'
import FooterBase from '@/components/FooterBase'

import data from "@/assets/data.json"

import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  components: {
    HeaderBase,
    AboutContent,
    FooterBase
  },
  data: function () {
    return {
      data: null
    }
  },
  created: async function () {
    this.data = data
  }
}
</script>

<style>
@font-face {
  font-family: "Tamzen";
  font-weight: normal;
  font-style: normal;
  src: local("Tamzen"),
    url(./fonts/Tamzen/Tamzen6x12r.ttf) format("truetype");
}

@font-face {
  font-family: "Tamzen";
  font-weight: bold;
  font-style: normal;
  src: local("Tamzen-Bold"),
    url(./fonts/Tamzen/Tamzen6x12b.ttf) format("truetype");
}

:root {
  --bg-color: #0a0c10;
  --black-color: #000000;
  --red-color: #ff003c;
  --white-color: #f5faf9;
  --green-color: #406a63;
  --blue-color: #00ffd2;
}

html {
  overflow-y: scroll;
}

body {
  background-color: var(--bg-color);
  font-family: Tamzen;
  line-height: 1.4em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white-color);
}

p {
  margin: unset;
}

pre {
  background-color: var(--black-color);
  border: 1px solid var(--white-color);
  color: var(--white-color);
  padding: 7.5px;
}

code {
  background-color: var(--black-color);
  color: var(--white-color);
  padding: .2em .4em;
  border-radius: .2em;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
  animation: zoom-in 1s ease-in-out 1;
}

@keyframes zoom-in {
  0% {
    transform: scale(0.9, 0.95);
  }

  100% {
    transform: scale(1, 1);
  }
}

a {
  color: var(--white-color);
  text-decoration: none;
  border-bottom: 1px dotted var(--white-color);
}

a:hover {
  color: var(--green-color);
  border-bottom: 1px dotted var(--green-color);
}
</style>
