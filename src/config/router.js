import requireAll from './_requireAll'
import Vue from 'vue'

// 路由插件
import VueRouter from 'vue-router'
Vue.use(VueRouter);


// 引入所有路由配置
const routerObj = requireAll(require.context("@/router", false, /^\.\/.*\.js$/));
let routes = [];
for(let i = 0, len = routerObj.length; i < len; i++){
    if (routerObj.length>0) {
        // 数组类型的路由
        for(let n = 0, le = routerObj[i].default.length; n < le; n++){
            routes.push(routerObj[i].default[n])
        }
    }else{
        routes.push(routerObj[i].default)
    }
}


// 整合路由
const router = new VueRouter({
    routes
});




export default router
