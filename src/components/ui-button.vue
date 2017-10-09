<style lang="scss">
    @import '~@/scss/public.scss';
    .ui-button {
        width: 2rem !important;
        height: 2rem !important;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        >.mint-button {
            width: 100% !important;
            height: 100% !important;
            font-size: 1rem;
            background-color: transparent;
            box-shadow: none;
            position: relative;
            &:active,&:focus{
                color: $ui-color-orange !important;
                background-color: #999 !important;
            }
            .mint-button-icon{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%,-50%,0);
            }
        }

        .more {
            .popup {
                // height: 100%;
                width: 100%;
                padding: .5rem;
            }

            .button-group {
                width: 100%;
                .fa-icon {
                    margin-right: .4rem;
                }
                .mint-cell-title {
                    text-align: left;
                }
                .mint-cell-text {
                    font-size: 1rem;
                    color: $ui-color-black;
                }
            }

            .popup-button {
                width: 100%;
                height: 2rem;
                font-size: 1rem;
                border-bottom: $ui-border;
                display: block;
                padding: 1.5rem 0;
                text-align: left;
                color: rgba(black, .7);
                padding-left: 1rem;
                display: flex;
                align-items: center;
            }

            .close-button {
                color: $ui-color-blue;
                font-size: 1.2rem;
                padding: .5rem;
                text-align: center;
            }
        }

        .mintui-back{
            font-size: 1rem;
        }
    }

</style>

<template>
    <div class="ui-button">

        <!-- 回到首页 -->
        <mt-button @click="$router.push({path:'/home'})" v-if="icon=='home'">
            <icon name="home" class="mt02"></icon>
        </mt-button>

        <!-- 返回 -->
        <mt-button @click="$router.go(-1)" v-if="icon=='back'" icon="back"></mt-button>

        <!-- 更多 -->
        <div class="more" v-if="icon=='more'">
            <mt-button icon="more" @click="moreActive = true"></mt-button>

            <mt-popup v-model="moreActive" position="top" class="popup">
                <div class="button-group">
                    <mt-cell title="回到首页" to="/" is-link>
                    </mt-cell>
                    
                    <!--允许自定义更多菜单-->
                    <slot></slot>

                    <hr>
                    <div class="close-button" @click="moreActive = false">取消</div>
                </div>
            </mt-popup>
        </div>

        <!-- 搜索 -->
        <mt-button @click="$router.push({path:'search'})" v-if="icon=='search'">
            <icon name="search"></icon>
        </mt-button>

    </div>
</template>
<script>
    export default {
        name: 'ui-button',
        props: ['icon'],
        data() {
            return {
                isLogged: true, //是否登录
                moreActive: false,
            }
        },
        methods: {
            openMore(){
                console.log('more');
            }
        }
    }

</script>
