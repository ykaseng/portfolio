<template>
    <div class="container">
        <div class="title-container">
            <b class="title">{{ title }}</b>
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
        border-bottom: 1px solid var(--BG-COLOR);
    }
    100%{
        border-bottom: 1px solid var(--WHT-COLOR);
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
    border-bottom: 1px solid var(--WHT-COLOR);

    text-transform: uppercase;
    text-align: left;
    animation: slideIn 1.5s ease-in 0s 1,
        blink .25s steps(2) 0s 7;
}

.title {
    overflow: hidden;
    white-space: nowrap;
    /* letter-spacing: .15em; */
    animation: typing 5s steps(30, end);
}

</style>