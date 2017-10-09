<template>
    <ui-main>
        <mt-header slot="header" :title="$route.name">
            <ui-button icon="back" slot="left"></ui-button>
        </mt-header>

        <mt-button @click="toggle" class="ui-button-large mt1">列表切换</mt-button>

        <!-- 创建一个列表 -->
        <mt-cell v-for="(item,i) in list" :key="i" :title="item.title">
            <icon name="file-image-o" slot="icon"></icon>
        </mt-cell>
        <!-- 紧跟着将list传给empty组件 -->
        <ui-empty :data="list"></ui-empty>

    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                list:[],
                listFull:[
                    {title:'测试列表1'},
                    {title:'测试列表2'},
                    {title:'测试列表3'},
                    {title:'测试列表4'},
                    {title:'测试列表5'},
                    {title:'最后一个'},
                ]
            }
        },
        methods:{
            toggle(){
                if (this.list.length===0) {
                    this.list = this.listFull
                }else{
                    this.list = []
                }
            }
        },
    }
</script>