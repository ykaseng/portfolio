<template>
  <div class="skills-container">
    <TitleAlt title="Technical Skills" />
    <div class="prof-container container row g-0">
      <div v-if="!isMobile()" class="prof-summary-container container col col-md-3">
        <b>BACKEND</b>
        <b>17</b>
      </div>
      <div class="prof-details-container col col-md-9">
        <b>PROFICIENCIES</b>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>go</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" />
            <Button label="5" :clickable="false" :active=true />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>php</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>mysql</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>mssql</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
      </div>
    </div>
    <div class="prof-container container row g-0">
      <div v-if="!isMobile()" class="prof-summary-container col col-md-3">
        <b>FRONTEND</b>
        <b>18</b>
      </div>
      <div class="prof-details-container col col-md-9">
        <b>PROFICIENCIES</b>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>vue</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>javascript</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>html5</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" />
            <Button label="5" :clickable="false" :active=true />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>css3</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" />
            <Button label="5" :clickable="false" :active=true />
          </div>
        </div>
      </div>
    </div>
    <div class="prof-container container row g-0">
      <div v-if="!isMobile()" class="prof-summary-container col col-md-3">
        <b>DEV OPS</b>
        <b>14</b>
      </div>
      <div class="prof-details-container col col-md-9">
        <b>PROFICIENCIES</b>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>linux</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>networking</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" :active=true />
            <Button label="4" :clickable="false" />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>gcp</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" />
            <Button label="4" :clickable="false" :active=true />
            <Button label="5" :clickable="false" />
          </div>
        </div>
        <div class="prof-row-container row g-0">
          <div class="prof-label col col-2">
            <p>aws</p>
          </div>
          <div class="prof-level col col-10">
            <Button label="1" :clickable="false" />
            <Button label="2" :clickable="false" />
            <Button label="3" :clickable="false" :active=true />
            <Button label="4" :clickable="false" />
            <Button label="5" :clickable="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleAlt from '@/components/TitleAlt'
import Button from '@/components/Button'

export default {
    name: 'Skills',
    components: {
        TitleAlt,
        Button
    },
    methods: {
      isMobile() {
        return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      }
    },
}
</script>

<style scoped>
@keyframes slideDown {
  from { visibility: hidden; }
  to { visibility: visible;  }
}

@keyframes blink {
  0% { visibility: hidden; }
  69% { visibility: visible; }
  90% { visibility: hidden; }
  100% { visibility: visible; }
}

@media screen and (max-width: 767px) {
  .prof-container:nth-child(2) .prof-details-container b,
  .prof-container:nth-child(2) .prof-details-container .prof-label {
    animation: blink .75s steps(10) 2;
    animation-fill-mode: forwards;
  }
  .prof-container:nth-child(3) .prof-details-container b,
  .prof-container:nth-child(3) .prof-details-container .prof-label {
    animation: blink .55s steps(10) 4 .2s;
    animation-fill-mode: forwards;
  }
  .prof-container:nth-child(4) .prof-details-container b,
  .prof-container:nth-child(4) .prof-details-container .prof-label {
    animation: blink .69s steps(10) 3 .4s;
    animation-fill-mode: forwards;
  }
}

@media screen and (min-width: 768px) {
  .prof-container:nth-child(2) .prof-details-container b,
  .prof-container:nth-child(2) .prof-details-container .prof-label,
  .prof-container:nth-child(2) .prof-summary-container:nth-child(1) {
    animation: blink .75s steps(10) 2;
    animation-fill-mode: forwards;
  }
  .prof-container:nth-child(3) .prof-details-container b,
  .prof-container:nth-child(3) .prof-details-container .prof-label,
  .prof-container:nth-child(3) .prof-summary-container:nth-child(1) {
    animation: blink .55s steps(10) 4 .2s;
    animation-fill-mode: forwards;
  }
  .prof-container:nth-child(4) .prof-details-container b,
  .prof-container:nth-child(4) .prof-details-container .prof-label,
  .prof-container:nth-child(4) .prof-summary-container:nth-child(1) {
    animation: blink .69s steps(10) 3 .4s;
    animation-fill-mode: forwards;
  }
}

.skills-container {
  text-transform: uppercase;
  margin-bottom: 1em;
  /* line-height: 1.5em; */
}

.prof-container {
  gap: 1em;
  flex-wrap: nowrap;
  margin-bottom: .5em;
}

.prof-summary-container {
  display: flex;
  flex-basis: 1em;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  
  position: relative;
  padding: .5em;
  border: 1px solid var(--WHT-COLOR);
}

.prof-summary-container::after {
  transform: rotate(90deg);
  position: absolute;
  content: '▓';
  right: 1em;
  bottom: .5em;
}

.prof-details-container b, 
.prof-details-container .prof-label, 
.prof-summary-container {
  visibility: hidden;
}

.prof-container:nth-child(2) .prof-row-container:nth-child(2) .prof-level {
    animation-delay: .3s;
  }
  .prof-container:nth-child(2) .prof-row-container:nth-child(3) .prof-level {
    animation-delay: .4s;
  }
  .prof-container:nth-child(2) .prof-row-container:nth-child(4) .prof-level {
    animation-delay: .5s;
  }
  .prof-container:nth-child(2) .prof-row-container:nth-child(5) .prof-level {
    animation-delay: .6s;
  }

  .prof-container:nth-child(3) .prof-row-container:nth-child(2) .prof-level {
    animation-delay: .7s;
  }
  .prof-container:nth-child(3) .prof-row-container:nth-child(3) .prof-level {
    animation-delay: .8s;
  }
  .prof-container:nth-child(3) .prof-row-container:nth-child(4) .prof-level {
    animation-delay: .9s;
  }
  .prof-container:nth-child(3) .prof-row-container:nth-child(5) .prof-level {
    animation-delay: 1s;
  }

  .prof-container:nth-child(4) .prof-row-container:nth-child(2) .prof-level {
    animation-delay: 1.1s;
  }
  .prof-container:nth-child(4) .prof-row-container:nth-child(3) .prof-level {
    animation-delay: 1.2s;
  }
  .prof-container:nth-child(4) .prof-row-container:nth-child(4) .prof-level {
    animation-delay: 1.3s;
  }
  .prof-container:nth-child(4) .prof-row-container:nth-child(5) .prof-level {
    animation-delay: 1.4s;
  }

.prof-row-container {
  display: flex;
  justify-content: space-between;
}

.prof-level {
  text-align: right;
  overflow: hidden;
  visibility: hidden;
  animation: slideDown .1s steps(1);
  animation-fill-mode: forwards;
}

.prof-level > button:not(:first-child) {
  margin-left: .5em;
}
</style>