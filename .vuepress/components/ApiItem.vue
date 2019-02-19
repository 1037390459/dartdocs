<template>
    <div class="api-item">
        <ApiName
            :link="link"
            :name="name"
            :types="types"
            :deprecated="deprecated"
            :calls="calls"
            :returns="returns"
        />
        <slot />
    </div>
</template>

<script>
    import ApiName from './ApiName'
    export default {
        name: 'ApiItem',
        props: {
            link: String,
            name: String,
            types: Array,
            deprecated: Boolean,
            calls: [Boolean, Array],
            returns: [String, Object]
        },
        components: {
            ApiName
        }
    }
</script>

<style>
.api-item {
    margin-top: 20px;
    font-family: "Source Sans Pro", sans-serif;
}
.api-item .api-name .name.deprecated {
    text-decoration: line-through;
}
.api-item p {
    margin: 0;
}

.api-item .api-name .api-name {
    display: inline;
}

</style>