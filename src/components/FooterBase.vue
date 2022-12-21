<template>
    <footer v-html=footer />
</template>

<script>
export default {
    name: 'FooterBase',
    props: {
        footer: String
    }
}
</script>

<style scoped>
footer {
    border-top: 1px solid var(--white-color);
}

:deep(ul) {
    padding: unset;
}

:deep(li) {
    display: inline;
}

:deep(nav li:not(:last-child)::after) {
    content: " :: ";
}

:deep(nav) {
    margin: 1em auto;
}
</style>