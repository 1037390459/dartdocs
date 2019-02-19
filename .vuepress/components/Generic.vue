<template>
    <span class="generic"><span v-for="(item, index) in value">&lt;<template v-if="typeof item === 'string'">{{item}}</template><template v-if="typeof item === 'object'"><router-link :to="item.link">{{item.value}}</router-link></template><template v-if="index !== value.length - 1">,</template>&gt;</span></span>
</template>

<script>
    export default {
        props: {
            value: Array
        }
    }
</script>

<style scoped>

</style>