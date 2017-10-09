<template>
    <ui-main class="bg-white">
        <mt-header slot="header" :title="$route.name">
            <ui-button icon="back" slot="left"></ui-button>
        </mt-header>

        <div class="p05">
            <ui-checkbox v-model="checked" name="inputName" label="我已阅读条款协议"></ui-checkbox>
        </div>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                checked:''
            }
        },
    }
</script>