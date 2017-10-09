<style lang="scss" scoped>
    @import '~@/scss/public.scss';
    .ui-field{
        border: $ui-border;
        position: relative;
        height: 2.4rem;
        font-size: 1.1rem;
        margin: .5rem 1rem 0;
        transition: .3s;
        color: #999;
        &:hover{
            border-color: darkorange;
            color: darkorange;
        }
        &.ui-field-empty{
            border:none;
        }
        input{
            position: absolute;
            top: -3px;
            left: 0;
            background: white;
            display: block;
            width: calc(100% + 2px);
            margin-left: -1px;
            height: 100%;
            font-size: .9rem;
            text-indent: 2rem;
            outline: none;
            border:none;
        }
        >.fa-icon{
            position: absolute;
            top: calc(50% - 3px);
            left: .2rem;
            z-index: 2;
            transform: translateY(-50%);
        }
    }
</style>
<template>
    <div class="ui-field relative" :class="{'ui-field-empty': type===undefined}">


        <icon :name="icon" :scale="iconSize" :style="iconStyle" v-if="icon"></icon>

        <slot v-if="type===undefined"></slot>

        <div v-if="type==='password'">
            <input type="password" :placeholder="placeholder" v-show="!showPass" v-model="model">
            <input type="text" :placeholder="placeholder" v-show="showPass" v-model="model">
            <mt-button class="float-right ui-button-text" style="color: inherit" @click="showPass=!showPass">
                <icon name="eye-slash" class="text" v-if="!showPass"></icon>
                <icon name="eye" class="text" v-else></icon>
            </mt-button>
        </div>

        <div v-if="type==='code'" class="absolute" style="top:0;left:0;right:0;bottom:0">
            <input type="text" :placeholder="placeholder" v-model="model" class="flex-1">
            <div class="absolute" style="right:0;top:0">
                <slot name="right"></slot>
            </div>
        </div>

        <div v-if="type==='text'">
            <input type="text" :placeholder="placeholder" v-model="model">
        </div>

        <div v-if="type==='text'">
            <input type="text" :placeholder="placeholder" v-model="model">
        </div>

        <div v-if="type==='number'">
            <input type="number" :placeholder="placeholder" v-model="model">
        </div>

    </div>
</template>
<script>
    export default {
        name: 'ui-field', //登录 注册等界面的输入框
        props:['icon', 'icon-size','icon-style', 'type', 'value', 'placeholder'],
        data() {
            return {
                showPass: false,
                model:''
            }
        },
        watch: {
            value(){
                this.model = this.value
            },
            model(v){
                this.$emit('input', v)
            }
        }
    }
</script>