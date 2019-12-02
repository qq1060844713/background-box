<template>

    <div>
        <div class="item">
            <background-box :src-img="defImg" frame-height="calc(1vw + 10px)" frame-width="calc(1vw + 10px)">
                <img style="height: 200px;width: 200px" :src="defaultImg"/>
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
                defaultImg: require('../assets/defaultImg.png'),
                defImg:require('../assets/box_left_angle.svg')
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
