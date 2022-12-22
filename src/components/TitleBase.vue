<template>
    <div class="title-container">
        <b class="title">{{ title }}</b>
    </div>
</template>

<script>
export default {
    name: 'TitleBase',
    props: {
        title: String
    }
}
</script>

<style scoped>
@keyframes fillIn {
    0% {
        background: linear-gradient(to left, var(--bg-color) 50%, var(--white-color) 50%) right;
        background-size: contain;
    }
    25% {
        background-size: 190%;
        background-position: left;
    }
    100% {
        background: linear-gradient(to left, var(--bg-color) 50%, var(--white-color) 50%);
        background-size: 200%;
        background-position: left;
    }
}

@keyframes pixelate {
    0% {
        color: var(--white-color);
        content: '▓';
        /* border: 1px solid red; */
    }
    100% {
        color: var(--white-color);
        content: '░';
    }
}

.title-container {
    text-transform: uppercase;
    text-align: left;
    color: var(--black-color);
    margin: 1em 0;

    animation: fillIn 2s ease-out 0s 1;
    background: var(--white-color);
}

.title-container::before {
    position: relative;
    color: var(--white-color);
    content: '▓';
    left: -.2em;
    animation: pixelate .5s steps(20) 0s 4;
}

.title-container::after {
    float: right;
    color: var(--black-color);
    content: '░░';
}
</style>