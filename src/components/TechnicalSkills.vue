<template>
  <div class="skills-container">
    <TitleAlt title="Technical Skills" />
    <div class="prof-container container row g-0" v-for="(skill, i) in getSkills" :key="skill.area">
      <div v-if="!isMobile()" class="prof-summary-container container col col-md-3">
        <b>{{ skill.area }}</b>
        <b>{{ skill.sumProf }}</b>
      </div>
      <div class="prof-details-container col col-md-9">
        <b>PROFICIENCIES</b>
        <div class="prof-row-container row g-0" v-for="(val, key, j) in skill.proficiencies" :key="key">
          <div class="prof-label col col-2">
            <p>{{ key }}</p>
          </div>
          <div class="prof-level col col-10" :style=animationDelay(i,j) >
            <template v-for="k in 5" :key="k">
              <ButtonBase :label=k.toString() :clickable=false v-bind:active="k == val ? true : false" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleAlt from '@/components/TitleAlt'
import ButtonBase from '@/components/ButtonBase'

export default {
  name: 'TechnicalSkills',
  components: {
    TitleAlt,
    ButtonBase
  },
  props: {
    skills: Array
  },
  computed: {
    getSkills() {
      this.skills.forEach((skill) => {
        var profMap = new Map(Object.entries(skill.proficiencies))
        skill.sumProf = 0
        profMap.forEach((val) => {
          skill.sumProf += val
        })
      })

      return this.skills
    }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    animationDelay(i, j) {
      return {
        'animation-delay': i * 0.4 + j * 0.1 + 0.3 + 's'
      }
    }
  },
}
</script>

<style scoped>
@keyframes slideDown {
  from {
    visibility: hidden;
  }

  to {
    visibility: visible;
  }
}

@keyframes blink {
  0% {
    visibility: hidden;
  }

  69% {
    visibility: visible;
  }

  90% {
    visibility: hidden;
  }

  100% {
    visibility: visible;
  }
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

.prof-level>button:not(:first-child) {
  margin-left: .5em;
}
</style>