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
  --BG-COLOR: #1c1c1c;
  --FG-COLOR: #dfdfaf;
  --BLK-COLOR: #262626;
  --RED-COLOR: #af5f5f;
  --GRN-COLOR: #87875f;
  --YLW-COLOR: #af875f;
  --BLU-COLOR: #878787;
  --PUR-COLOR: #af8787;
  --CYN-COLOR: #87afaf;
  --WHT-COLOR: #dfdfaf;
  --GRY-COLOR: #626262;
  --RST-COLOR: #dfaf87;
}

html {
  overflow-y: scroll;
}

body {
  background-color: var(--BG-COLOR);
  font-family: Tamzen;
  line-height: 1.4em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--WHT-COLOR);
}

p {
  margin: unset;
}

pre {
  background-color: var(--BLK-COLOR);
  border: 1px solid var(--WHT-COLOR);
  color: var(--GRN-COLOR);
  padding: 7.5px;
}

code {
  background-color: var(--BLK-COLOR);
  color: var(--GRN-COLOR);
  padding: .2em .4em;
  border-radius: .2em;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}

a {
  color: var(--GRN-COLOR);
  text-decoration: none;
  border-bottom: 1px dotted var(--GRN-COLOR);
}

a:hover {
  color: var(--PUR-COLOR);
  border-bottom: 1px dotted var(--PUR-COLOR);
}

#nav a {
  font-weight: bold;
  color: var(--GRY-COLOR);
}

#nav a.router-link-exact-active {
  color: var(--GRN-COLOR);
}
</style>
