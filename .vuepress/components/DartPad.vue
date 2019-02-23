<template>
    <iframe
        class="dart-pad"
        :style="{height: height + 'px'}"
        :src="'https://dartpad.ranyunlong.com/embed-inline.html?id=' + id + '&verticalRatio=' + verticalRatio">
        </iframe>
</template>

<script>
    export default {
        props: {
            id: String,
            height: [Number, String],
            verticalRatio: [Number, String]
        }
    }
</script>

<style>
    .dart-pad {
        border:none;
        width: 100%;
    }
</style>