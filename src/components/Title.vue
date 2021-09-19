<template>
    <div class="title-container">
        <b class="title">{{ title }}</b>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: String
    }
}
</script>

<style scoped>
@keyframes fillIn {
    0% {
        background: linear-gradient(to left, var(--BG-COLOR) 50%, var(--WHT-COLOR) 50%) right;
        background-size: contain;
    }
    25% {
        background-size: 190%;
        background-position: left;
    }
    100% {
        background: linear-gradient(to left, var(--BG-COLOR) 50%, var(--WHT-COLOR) 50%);
        background-size: 200%;
        background-position: left;
    }
}

@keyframes pixelate {
    0% {
        color: var(--WHT-COLOR);
        content: '▓';
        /* border: 1px solid red; */
    }
    100% {
        color: var(--WHT-COLOR);
        content: '░';
    }
}

.title-container {
    text-transform: uppercase;
    text-align: left;
    color: var(--BLK-COLOR);

    animation: fillIn 2s ease-out 0s 1;
    background: var(--WHT-COLOR);
}

.title-container::before {
    position: relative;
    color: var(--WHT-COLOR);
    content: '▓';
    left: -.2em;
    animation: pixelate .5s steps(20) 0s 4;
}

.title-container::after {
    float: right;
    color: var(--BG-COLOR);
    content: '░░';
}
</style>