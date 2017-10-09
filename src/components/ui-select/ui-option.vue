<template>
    <option :value="value">{{label}}</option>
</template>
<script>
    export default {
        name:'ui-option',
        props:{
            value:{},
            label:String
        },
    }
</script>