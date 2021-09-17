<template>
    <div class="container">
        <div class="title-container">
            <b class="title">{{ title }}</b>
        </div>
        <div class="bar-container">
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleAlt',
    props: {
        title: String
    },

}
</script>

<style scoped>
@keyframes slideIn {
    0%{
        transform: translateX(+100%);
    }
    25%{
        transform: translateX(+10%)
    }
    100%{
        transform: translateX(0);
    }
}

@keyframes blink {
    0%{
        color: var(--BG-COLOR);
    }
    100%{
        color: var(--WHT-COLOR);
    }
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

.container {
    overflow: hidden;
}

.title-container {
    display: flex;

    text-transform: uppercase;
    text-align: left;
    animation: slideIn 1.5s ease-in 0s 1;
}

.title {
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: .15em;
    animation: typing 3.5s steps(30, end);
}

hr {
    animation: blink .25s ease-in 0s 5;
}
</style>