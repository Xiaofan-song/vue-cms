//入口文件
import Vue from 'vue'
//1.导入路由
import VueRouter from 'vue-router'
//2.安装路由模块
Vue.use(VueRouter);
//设置默认的跟地址

//注册vuex
import Vuex from 'vuex'

Vue.use(Vuex)
//创建一个vuex实例

//每次刚进入网址 肯定会调用main.js,在刚调用的时候,先从本地储存中,将购物车的数据读取出来,放到store中去
var car = JSON.parse(localStorage.getItem('car') || '[]')


var store = new Vuex.Store({
    state: {//this.$store.state.***
        car: car,//将购买商品的数据,用一个car的数组保存起来,储存我们一些商品的对象
        //eg: {id:商品id,商品的数量:count,商品的单价:price,selected:true}
    },
    mutations: {//this.$store.commit('方法名称',"按需传入唯一的参数")
        addTocar(state, goods) {
            //--------商品详情页向store里面传入数据,通过addTocar
            var flag = false;//默认car里面没有
            state.car.some(item => {
                if (item.id === goods.id) {
                    item.count += parseInt(goods.count);
                    flag = true;
                    return true;
                }
            })
            if (!flag) {
                state.car.push(goods);
            }

            //当更新完car后 把 car 数组,存储到本地的localStorage中去
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateTocar(state, goodsinfo) {
            //修改购物车中商品的数量值---购物车页面修改store中的值
            state.car.forEach(item => {
                if (item.id === goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true;
                }
            })
            //当修该完成之后,最新的购物车数据保存到本地
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeTocar(state, id) {
            state.car.forEach((item, i) => {
                if (item.id === id) {
                    state.car.splice(i, 1)
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateSwitch(state, obj) {
            state.car.forEach(item => {
                //找到每一项,找到修改 id 的每一项,将 selected 修改
                if (item.id === obj.id) {
                    item.selected = obj.selected;
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {//this.$store.gerters.***
        //只要state里面的数据改变了,这里的数据也会改变,所以只需要在这里定义方法
        addAllCount(state) {//拿到所有的数字之和---购物车徽标需要的那个
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            })
            return c;
        },
        getGoodsCount(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.count;
            })
            return o;
        },
        //在这里定义一个方法,拿到值按钮是否选中的的值
        getSwitchStatus(state) {
            var o = {};
            state.car.forEach(item => {
                o[item.id] = item.selected;
            })
            return o;
        },
        getGoodsAmountAndPrice(state) {
            //这里需要判断一下selected的值是否被选中,如果被选中,则计算数量和总和
            var o = {amount: 0, price: 0};
            state.car.forEach(item => {
                if (item.selected === true) {
                    o.amount += item.count;
                    o.price += item.price * item.count
                }
            })
            return o;
        }

    }

})


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
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//全局设置 post 设置时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true;

//导入时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dataFor', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
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
    store,//将store挂载到实例上去

});