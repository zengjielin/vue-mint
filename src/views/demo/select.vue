<template>
    <ui-main>
        <mt-header slot="header" :title="$route.name">
            <ui-button icon="back" slot="left"></ui-button>
        </mt-header>

        <ui-select v-model="selected" placeholder="请选择一项" label="这是单选题">
            <ui-option v-for="item in option" :key="item.id" :label="item.label" :value="item.id"></ui-option>
        </ui-select>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                option:[
                    {label:'萝莉',id:'01'},
                    {label:'御姐',id:'02'},
                    {label:'都要',id:'03'},
                ],
                selected:''
            }
        },
    }
</script>