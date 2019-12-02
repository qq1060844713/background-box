<template>
    <div class="bg-box">
        <img class="img img-left" :src="$constants.defaultImg" :style="$constants.frameHeight,$constants.frameWidth"/>
        <img class="img img-right" :src="$constants.defaultImg" :style="$constants.frameHeight,$constants.frameWidth"/>
        <img class="img img-bottom-left" :src="$constants.defaultImg" :style="$constants.frameHeight,$constants.frameWidth"/>
        <img class="img img-bottom-right" :src="$constants.defaultImg" :style="$constants.frameHeight,$constants.frameWidth"/>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "backgroundBox",
        props: ['srcImg', 'frameWidth','frameHeight'],
        data: function () {
            return {
                defaultImg: require('./box_left_angle.svg'),
            }
        },
        created(){
            this.$constants = {
                defaultImg: this.srcImg!=undefined?this.srcImg:this.defaultImg,
                frameWidth:'width:'+this.frameWidth,
                frameHeight:'height:'+this.frameHeight
            }
        }
    }
</script>

<style scoped lang="scss">
    .bg-box{
        position: relative;
        .img{
            position: absolute;
        }
        .img-left {
            left: 0;
            top: 0;
        }

        .img-right {
            right: 0;
            top: 0;
            transform: rotate(90deg);
        }

        .img-bottom-left {
            left: 0;
            bottom: 0;
            transform: rotate(270deg);
        }

        .img-bottom-right {
            right: 0;
            bottom: 0;
            transform: rotate(180deg);
        }
    }
</style>
