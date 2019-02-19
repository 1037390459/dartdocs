<template>
    <div class="api-name">
        <span class="name" :class="{deprecated}">
            <router-link v-if="link" :to="link">
                {{name}}
            </router-link>
            <template v-else>
                {{name}}
            </template>
        </span>
        <span v-if="types">
            <span>&lt;</span>
            <span v-for="(item, index) in types">
                <template v-if="typeof item === 'string'">{{item}}</template>
                <template v-if="item.name">
                    <router-link v-if="item.link" :to="item.link">
                        {{item.name}}
                    </router-link>
                    <template v-else>
                        {{item.name}}
                    </template>
                </template>
                <template v-if="index !== types.length-1">,&nbsp;</template>
            </span>
            <span>&gt;</span>
        </span>
        <span v-if="calls">
            <span>(</span>
            <span v-for="(item, index) in calls">
                <template v-if="typeof item.type === 'object'">
                    <router-link v-if="item.type.link" :to="item.type.link">{{item.type.name}}</router-link>
                    <template v-else>
                        {{item.type.name}}
                    </template>
                </template>
                <template v-if="typeof item.type === 'string'">
                    {{item.type}}
                </template>
                &nbsp;<ApiName 
                    v-if="typeof item.value ==='object'"
                    :link="item.value.link"
                    :name="item.value.name"
                    :types="item.value.types"
                    :deprecated="item.value.deprecated"
                    :calls="item.value.calls"
                    :returns="item.value.returns"
                />
                <template v-else>{{item.value}}</template>
                <template v-if="index !== calls.length - 1">,&nbsp;</template>
            </span>
            <span>)</span>
        </span>
        <span v-if="returns">
            &nbsp;→&nbsp;<template v-if="typeof returns === 'object'">
                <router-link :to="returns.link">{{returns.value}}</router-link>
            </template>
            <template v-else>{{returns}}</template>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'ApiName',
        props: {
            link: String,
            name: String,
            types: Array,
            deprecated: Boolean,
            calls: [Boolean, Array],
            returns: [String, Object]
        }
    }
</script>

<style>
</style>