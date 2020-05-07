import VueRouter from 'vue-router'

//导入各个子组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'

//导入news的子组件
import NewsList from './components/news/newsList.vue'
//导入新闻详情的组件
import NewsInfo from './components/news/newsInfo.vue'
//导入home的照片页
import PhotoList from './components/photoes/PhotoList.vue'
//导入照片详情页
import PhotoInfo from './components/photoes/PhotoInfo.vue'
//到如商品页
import GoodsList from './components/goodslist/GoodList.vue'
//到商品详情页
import GoodsInfo from './components/goodslist/GoodInfo.vue'
//导入商品图文介绍页
import GoodsDesc from './components/goodslist/GoodsDesc.vue'
//导入商品评论页
import GoodsComment from './components/goodslist/Goodscomment.vue'

//创建路由规则
var router = new VueRouter({
    routes: [
        {path: '/', component: HomeContainer},//默认根路由为首页
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/search', component: SearchContainer},
        {path: '/shop', component: ShopContainer},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newslist/:id', component: NewsInfo},
        {path: '/home/photolist', component: PhotoList},
        {path: '/home/photolist/photoinfo/:id', component: PhotoInfo},
        {path: '/home/goodslist', component: GoodsList},
        {path: '/home/goodsinfo/:id', component: GoodsInfo,name:'goodsinfo'},
        {path: '/home/goodsdesc/:id', component: GoodsDesc,name:'goodsdesc'},
        {path: '/home/goodscomment/:id', component: GoodsComment,name:'goodscomment'},
    ],
    linkActiveClass: 'mui-active'//默认覆盖路由高亮的类,默认的类叫做 router-link-active-
});

//es6标准,把路由对象暴露出去
export default router;