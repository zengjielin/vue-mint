<template>
    <ui-main>
        <mt-header slot="header" :title="$route.name">
            <ui-button icon="back" slot="left"></ui-button>
        </mt-header>

        <div class="f08">
            <div class="ui-card pre-line">
                与ui-main嵌套子路由不同，子页面可以直接与父页面进行交互。
                <span class="f-color-red f07">
                    需要注意的是，页面刷新后子页面不会保留状态。
                </span>
            </div>

            <div class="mt2">
                <span class="mr1">父页面的计数: {{count}}</span>
                <mt-button @click="showPage=true" type="primary" size="small">点我尝试</mt-button>
            </div>

        </div>

        
        <ui-page v-model="showPage" title="这是新页面">
            <div class="p05">
                <p>当前父页面计数+ {{count}}</p>
                <mt-button @click="count++">增加计数</mt-button>
            </div>
        </ui-page>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                showPage:false,
                count:0
            }
        },
    }
</script>