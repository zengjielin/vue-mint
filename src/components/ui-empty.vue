<template>
    <div v-if="data.length==0" class="h-100 flex row-center col-center f12 f-color-grey">
        {{label||'暂无数据'}}
    </div>
</template>
<script>
    export default {
        name:'ui-empty',
        props:['data','label'],
    }
</script>