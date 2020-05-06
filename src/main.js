//入口文件
import Vue from 'vue'
//1.导入路由
import VueRouter from 'vue-router'
//2.安装路由模块
Vue.use(VueRouter);
//设置默认的跟地址



//因为有单独的路由模块,所以需要在这里写路由,只需接收即可
import router from './router.js'

//导入虚拟的DOM文件
import app from './App.vue'

//按需导入mint-ui
import mint from 'mint-ui';
Vue.use(mint);
import 'mint-ui/lib/style.css'
//按需导入
// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);//轮播图使用(mint-ui)
// Vue.component(SwipeItem.name, SwipeItem);//轮播图使用(mint-ui)
// Vue.component(Button.name, Button);

//引入mui
import './lib/mui/css/mui.min.css'

//引入外部的css样式的图标字体
import './lib/mui/css/icons-extra.css'

//1.导入vue-resource
import VueResource from 'vue-resource'
//2.使用vue-resource
Vue.use(VueResource);
//设置请求的根路径,放在Resource后面
Vue.http.options.root='http://www.liulongbin.top:3005';
//全局设置 post 设置时候表单数据格式的组织形式
Vue.http.options.emulateJSON=true;

//导入时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dataFor',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);//给定指定的时间格式化
});

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

//创建vm实例
var vm = new Vue({
    el: '#app',
    render: c => c(app),//覆盖了原来的div
    router,//将路由挂载到实例上去

});