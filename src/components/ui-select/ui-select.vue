<style lang="scss" scoped>
    .ui-select{
        $height:50px;
        background: #fff;
        position: relative;
        .view{
            position: absolute;
            top: 0;
            right: 10px;
            white-space: nowrap;
            height: 100%;
            display: flex;
            align-items: center;
            z-index: 0;
            font-size: .8rem;
        }
        .box{
            height: $height;
        }
        select{
            width: 100%;
            height: $height;
            border:none;
            display: block;
            background:transparent;
            opacity: 0;
            font-size: .8rem;
            text-align: right;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 1;
        }
    }
</style>
<template>
    <div class="ui-select flex col-center">
        <span class="ml05 f08">{{label}}</span>
        <div class="box flex-1">
            <select ref="select" v-model="selected" @change="onChange" placeholder="placeholder">
                <slot></slot>
            </select>
            <div class="view">
                <span v-if="viewString">{{viewString}}</span>
                <span v-else class="f-color-grey">{{placeholder}}</span>
                <icon name="angle-right" class="ml1 mr02 f-color-grey"></icon>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ui-select',
        props:{
            value: {},
            label:String,
            valueKey: {
                type:String,
                default:'id'
            },
            change:Function,
            placeholder:String
        },
        data(){
            return {
                selected:'',
                viewString:'',
            }
        },
        mounted(){
            let $select = this.$refs['select']
            let $options = $select.children

            if (this.value) {
                // 初始回显
                $options.forEach((item) => {
                    if (item.value && item.value == this.value) {
                        this.viewString = item.text || item.value
                        return
                    }
                })
            }
            
        },
        methods:{
            onChange(e){
                let selectedOptions = e.target.selectedOptions
                let value = selectedOptions[0][this.valueKey]
                let text = selectedOptions[0].text
                this.viewString = text

                // 修改v-model
                this.$emit('input',value)

                // change回调
                this.change && this.change(value)
            }
        },
    }
</script>
