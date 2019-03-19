<template>
    <div class="application">
        <router-link :to="'/apps/' + info.id" class="application-main">
            <img :src="info.image">
            <h4>{{ info.name }}}</h4>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            info: Object
        },
        data() {
            return {

            }
        },
        methods: {

        }
    };
</script>

<style scoped>
    .application {
        width: 25%;
        float: left;
    }
    .application-main {
        display: block;
        margin: 16px;
        padding: 16px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        text-align: center;
        position: relative;
    }
    .application-main img{
        width: 100%;
    }
    h4{
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .application-main:hover h4{
        color: #0070c9;
    }
</style>
