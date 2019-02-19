<template>
    <span>
        [
        <router-link :to="link">
           {{text}}
        </router-link>>
        ]
    </span>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: '更多'
            },
            link: String
        }
    }
</script>

<style>
</style>