<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
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
  --BG-COLOR:   #1c1c1c;
  --FG-COLOR:   #dfdfaf;
  --BLK-COLOR:  #262626;
  --RED-COLOR:  #af5f5f;
  --GRN-COLOR:  #87875f;
  --YLW-COLOR:  #af875f;
  --BLU-COLOR:  #878787;
  --PUR-COLOR:  #af8787;
  --CYN-COLOR:  #87afaf;
  --WHT-COLOR:  #dfdfaf;
  --GRY-COLOR:  #626262;
  --RST-COLOR:  #dfaf87;
}

body {
  background-color: var(--BG-COLOR);
  font-family: Tamzen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--WHT-COLOR);
}

p {
  margin: unset;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}

#nav a {
  font-weight: bold;
  color: var(--GRY-COLOR);
}

#nav a.router-link-exact-active {
  color: var(--GRN-COLOR);
}
</style>
