<style lang="scss" scoped>
    .checkbox-icon{
        border: 1px solid #ff7610;
        display: inline-flex;
        width: 1rem;
        height: 1rem;
    }
    .fa-icon{
        color: #ff7610;
        font-weight: lighter;
    }
    .checkbox-text{
        text-indent: .5rem;
        color: rgba(black, .4);
        font-size: .8rem;
    }
</style>
<template>
    <div class="ui-checkbox">
        <label class="flex col-center">
            <input type="checkbox" :name="name" v-model="checked" style="display:none">

            <span class="checkbox-icon">
                <icon name="check" v-show="checked"></icon>
            </span>

            <span class="checkbox-text">{{label}}</span>
        </label>
    </div>
</template>
<script>
    export default {
        name: 'ui-checkbox',
        props:{
            value: {
                type: Boolean,
                default: false,
                require: true
            },
            name: {
                type: String
            },
            label:{
                type: String
            }
        },
        data() {
            return {
                checked: false
            }
        },
        watch: {
            value(v){
                this.checked = this.value
            },
            checked(v){
                this.$emit('input', v)
            }
        }
    }
</script>