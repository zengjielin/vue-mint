<style lang="scss" scoped>
    @import '~@/scss/public.scss';
    .ui-bottom-bar{
        background-color: white;
        width: 100%;
        display: flex;
        position: relative;
        color: #999;
        display: flex;
        font-size: .7rem;
        padding: .3rem 0; 
        >*{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .fa-icon{
            margin-bottom: .1rem;
        }
        .router-link-active{
            color: $ui-color-orange;
        }
    }
    .tip{
        position: absolute;
        top: -.2rem;
        left: 50%;
    }
</style>

<template>
    <div class="ui-bottom-bar">
        <router-link to="/home" tag="div">
            <icon name="home" class="block auto-center f10"></icon>
            首页
        </router-link>
        <router-link to="/message" tag="div">
            <icon name="commenting-o" class="block auto-center f10"></icon>
            消息
        </router-link>
        <router-link to="/order" tag="div" class="relative">
            <!-- <mt-badge size="small" type="error" class="tip">3</mt-badge> -->
            <icon name="map-o" class="block auto-center f10"></icon>
            订单
        </router-link>
        <router-link to="/person_center" tag="div">
            <icon name="user-o" class="block auto-center f10"></icon>
            我的
        </router-link>
    </div>
</template>
<script>
    export default {
        name:'ui-bottom-bar',
        data () {
            return {
                selected:'首页'
            }
        },
        watch: {
            '$route' () {
                // 路由切换时, 关闭上个页面可能存在的全局loading
                this.$indicator.close();
            },
        },
    }
</script>