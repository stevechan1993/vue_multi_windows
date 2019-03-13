<template>
    <div class="s-slider">
        <swiper :options="horizontalSwiperOptions" ref="horizontalSwiper">
            <swiper-slide class="left" ref="left" v-bind:style="{'background':getRandomColor()}">
                <slot name="left"></slot>
            </swiper-slide>
            <swiper-slide class="content">
                <swiper :options="verticalSwiperOptions" ref="verticalSwiper">
                    <swiper-slide class="top" ref="top" v-bind:style="{'background':getRandomColor()}">
                        <slot name="top"></slot>
                    </swiper-slide>
                    <swiper-slide class="content" ref="content" v-bind:style="{'background':getRandomColor()}">
                        <slot name="content"></slot>
                    </swiper-slide>
                    <swiper-slide class="bottom" ref="bottom" v-bind:style="{'background':getRandomColor()}">
                        <slot name="bottom"></slot>
                    </swiper-slide>
                </swiper>
            </swiper-slide>
            <swiper-slide class="right" ref="right" v-bind:style="{'background':getRandomColor()}">
                <slot name="right"></slot>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
    import {swiper, swiperSlide, swiperWraper} from 'vue-awesome-swiper'
    export default {
        name: "s-slider",
        props: ['leftWidth','rightWidth','topHeight','bottomHeight'],
        data() {
            return {
                horizontalSwiperOptions: {
                    slidesPerView: 'auto',
                    initialSlide: 0,
                    direction: 'horizontal'
                },
                verticalSwiperOptions:{
                    slidesPerView: 'auto',
                    initialSlide: 0,
                    direction: 'vertical'
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this._initMenuWidth();
            }, 20);
        },
        methods: {
            _initMenuWidth() {
                this.$refs.left.$el.style.width = this.leftWidth;
                this.$refs.right.$el.style.width = this.rightWidth;
                this.$refs.top.$el.style.height = this.topHeight;
                this.$refs.bottom.$el.style.height = this.bottomHeight;
                this.horizontalSwiper.updateSlides();
                this.horizontalSwiper.slideTo(1, 1000, false);
                this.verticalSwiper.updateSlides();
                this.verticalSwiper.slideTo(1, 1000, false);
            },
            /*获取随机颜色*/
            getRandomColor() {
                return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
            }
        },
        computed: {
            horizontalSwiper() {
                return this.$refs.horizontalSwiper.swiper;
            },
            verticalSwiper(){
                return this.$refs.verticalSwiper.swiper;
            }
        }
    }
</script>

<style scoped lang="scss">
    /*@import "src/base/css/public/variable.scss";*/
    /*@import "swiper/dist/css/swiper.css";*/

    .s-slider {
        height: 100%;
        color: white;
        .swiper-container {
            @include fill-with-parent
        }
    }
</style>
