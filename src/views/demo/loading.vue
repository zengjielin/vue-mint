<template>
    <ui-main class="bg-white">
        <mt-header slot="header" :title="$route.name">
            <ui-button icon="back" slot="left"></ui-button>
        </mt-header>

        <div class="f08 p05 pre-line">
            以下是400px高的区域, loading组件会覆盖在区域上方。
            你可以自定义组件的加载标题和背景色。

            <span class="f-color-orange">用 <mt-button @click="isLoading=!isLoading" type="primary" size="small">v-if</mt-button> 来控制loading的开启关闭</span>

            
        </div>

        <div style="height:400px">
            <ui-loading v-if="isLoading" title="加载中..." background="rgba(222, 230, 247, 0.8)"></ui-loading>
        </div>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                isLoading:true
            }
        },
    }
</script>