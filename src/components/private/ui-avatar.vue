<template>
    <ui-img :url="url" :style="{width:formatSize,height:formatSize}" class="ui-circle"></ui-img>
</template>
<script>
    export default {
        name:'ui-avatar',
        props:{
            url:{
                type: String
            },
            size:{ //rem
                type: String,
                default: '2'
            }
        },
        computed: {
            formatSize(){
                if (this.size.indexOf('px')<0 && this.size.indexOf('rem')<0) {
                    return this.size + 'rem'
                }
                return this.size
            }
        }
    }
</script>