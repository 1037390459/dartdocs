<template>
    <span class="tag">
        <template v-if="text">
            {{text}}
        </template>
        <slot />
    </span>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>

<style>
    .tag {
        font-size: 14px;
        background: #f1f1f1;
        margin:0 5px;
        padding: 0px 3px;
        border-radius: 2px;
        line-height: 14px;
        vertical-align: top;
    }
</style>