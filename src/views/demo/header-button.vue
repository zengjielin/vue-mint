<template>
    <ui-main>
        <mt-header slot="header" :title="$route.name">
            <ui-button icon="back" slot="left"></ui-button>
            <ui-button icon="home" slot="left"></ui-button>
            <ui-button icon="search" slot="right"></ui-button>
        </mt-header>

        <mt-header slot="header" :title="$route.name" class="mt1">
            <ui-button icon="back" slot="left"></ui-button>
            <ui-button icon="more" slot="right">
                <mt-cell title="个人中心" to="/" is-link></mt-cell>
            </ui-button>
        </mt-header>

            
    </ui-main>
</template>