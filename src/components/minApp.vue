<template>
    <div class="application">
        <router-link :to="'/apps/' + info.id" class="application-main">
            <img :src="info.image">
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "minApp"
    }
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
    .application-main:hover {
        color: #0070c9;
    }
</style>
