<template>

    <div>
        <div class="item">
            <background-box>
                <img slot="depth-box" :src="defaultImg"/>
            </background-box>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                defaultImg: require('../assets/defaultImg.png')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
    }

    .container {
        background: #ccc;
        width: 150px;
        height: 150px;
    }

</style>
