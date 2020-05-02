import VueRouter from 'vue-router'

//导入各个子组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'


//创建路由规则
var router = new VueRouter({
    routes: [
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shop', component: ShopContainer }],

        
    linkActiveClass: 'mui-active'//默认覆盖路由高亮的类,默认的类叫做 router-link-active-
});


//es6标准,把路由对象暴露出去
export default router;