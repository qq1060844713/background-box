<template>

    <div>
        <div class="item">
            <background-box :src-img="defImg" frame-height="calc(1vw + 10px)" frame-width="calc(1vw + 10px)">
                <img style="height: 200px;width: 200px" :src="defaultImg"/>
            </background-box>
        </div>
        <div class="item">
            <background-box :src-img="defImg" frame-height="100px" frame-width="100px">
                <div style="background: #ffffff;height: 300px;width: 300px;display: block;text-align: center">
                    <span style="position:absolute;text-align: center;right: 25%;margin-top: 9vw;font-size: 30px">背景框组件</span>
                </div>
            </background-box>
        </div>
        <div class="item">
            <background-box :src-img="defImg" frame-height="100px" frame-width="100px">
                <img style="height: 400px;width: 400px" src="http://img15.3lian.com/2015/f2/8/d/96.jpg"/>
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
