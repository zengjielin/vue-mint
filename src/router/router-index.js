import requireAll from '@/config/_requireAll'

// 获取views下的所有router.js文件的路由信息
const rs = requireAll(require.context("@/views", true, /router\.js$/));
let viewsRouterArry = []
rs.forEach((item)=>{
    let route = item.default
    if (route.length>0) {
        viewsRouterArry.push(...route)
    }else{
        viewsRouterArry.push(route)
    }
})


export default [
    // {
    //     path: '*',
    //     name: '404',
    //     component: r => require(['@/views/404.vue'], r)
    // },
    {
        path: '/',
        redirect: '/home', //重定向: '/' to '/home'
    },

    ...viewsRouterArry
]