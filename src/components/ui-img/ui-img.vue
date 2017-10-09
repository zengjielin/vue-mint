<style lang="scss" scoped>
    @import '~@/scss/public.scss';
    .ui-img{
        display: inline-flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        .ui-img-title{
            // 图片中的标题
            @include text-clamp(1);
            background-color: rgba(black, 0.5);
            padding: 0 1rem;
            margin: 0;
            font-size: .8rem;
            color: white;
            width: 100%;
            height: 2rem;
            line-height: 2rem;
        }
    }
</style>
<template>
    <div class="ui-img" :style="{ backgroundImage: imgUrl, width:formatSize, height:formatSize }">
    
        <!--标题-->
        <div v-if="title" class="ui-img-title">
            {{title}}
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-img',
        props:{
            url:{
                type: String,
                require: true
            },
            title:{
                type: String
            },
            size:{
                type: String,
                default: ''
            }
        },
        computed: {
            imgUrl(){
                if (this.url) {
                    return `url(${this.url})`
                }
                return ''
            },
            formatSize(){
                if (this.size.indexOf('rem')>-1 || this.size.indexOf('px')>-1) {
                    return this.size
                }
                return this.size + 'rem'
            }
        }
    }
</script>