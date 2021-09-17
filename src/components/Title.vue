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

.title-container {
    text-transform: uppercase;
    text-align: left;
    padding: 0 1em;
    color: var(--BLK-COLOR);

    animation: fillIn 2s ease-out 0s 1;
    background: var(--WHT-COLOR);
}
</style>