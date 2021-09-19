<template>
  <div class="container row g-0">
      <div class="title-container col" ref="titleC">
          <p class="title">{{ title }}</p>
      </div>
      <div class="description-container col" ref="descriptionC">
          <p v-show="showDesc" class="description">{{ description }}</p>
          <!-- <p class="description">{{ description }}</p> -->
      </div>
  </div>
</template>

<script>
export default {
    name: 'Label',
    mounted() {
        this.titleEl=this.$refs.titleC
        this.descEl=this.$refs.descriptionC

        this.el = this.titleEl
        this.setText(this.title).then(() => {
            this.showDesc = true
            this.el = this.descEl
            this.setText(this.description);
        })
    },
    data() {
        return {
            titleEl: {},
            descEl: {},
            el: {},
            showDesc: false
        }
    },
    methods: {
        setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 50)
                const end = start + Math.floor(Math.random() * 50)
                this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        },
        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                    }
                    output += `<span class="dud">${char}</span>`
                } else {
                    output += from
                }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
                this.resolve()
            } else {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        },
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    },
    props: {
        title: String,
        description: String,
        chars: {
            default: '!<>-_\\/[]{}—=+*^?#________',
            type: String            
        }
    },
}
</script>

<style scoped>
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

.container {
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
}

.container p {
    margin-bottom: unset;
}

.description-container {
    /* float: right; */
    text-align: right;
}

.title-container, .description-container {
    flex-wrap: nowrap;
}

.title, .description {
    /* width: 0; */
    overflow: hidden;
    white-space: nowrap;
    /* animation: typing 3.5s steps(30, end) 2s;
    animation-fill-mode: forwards; */
}
</style>