<style lang="scss">
    .scoped-home{
        .mint-cell-title{
            display: flex;
            align-items: center;
            .fa-icon{
                color:dodgerblue;
                height: 1.1rem;
                width: 1.1rem;
                margin-right: .5rem;
            }
        }
    }
</style>
<template>
    <ui-main class="scoped-home">
        <mt-cell title="图片" is-link to="/img">
            <icon name="file-image-o" slot="icon"></icon>
        </mt-cell>
        <mt-cell title="顶部按钮" is-link to="/header-button">
            <icon name="hand-o-up" slot="icon"></icon>
        </mt-cell>
        <mt-cell title="空列表" is-link to="/empty">
            <icon name="square-o" slot="icon"></icon>
        </mt-cell>
    </ui-main>
</template>