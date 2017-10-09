// 用popup封装一个弹出层页面

<style lang="scss">
    .ui-page{
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2010;
        transform: translate3d(0,0,0);
        display: flex;
        flex-direction: column;
        .mint-header{
            .mint-button{
                width: 2rem !important;
                height: 2rem !important;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                .mintui-back{
                    font-size: 1rem;
                }
            }
        }
    }
    
</style>
<template>
    <mt-popup v-model="active" popup-transition="popup-fade" :modal="false" class="ui-page">
        <mt-header :title="title">
            <mt-button icon="back" slot="left" @click="close"></mt-button>
        </mt-header>
        <div class="flex-1 scroll-y">
            <slot></slot>
        </div>
    </mt-popup>
</template>
<script>
    export default {
        name:'ui-page',
        props:{
            value:{
                type:Boolean,
            },
            title:String
        },
        data () {
            return {
                active: false
            }
        },
        watch: {
            active(v){
                this.$emit('input', v)
            },
            value(v){
                this.active = v
            }
        },
        methods:{
            close(){
                this.$emit('input', false)
            }
        },
    }
</script>