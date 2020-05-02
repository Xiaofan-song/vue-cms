//入口文件
import Vue from 'vue'


//导入虚拟的DOM文件
import app from './App.vue'

//按需导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
     

//引入mui
import './lib/mui/css/mui.min.css'

//创建vm实例
var vm = new Vue({

    el: '#app',
    render: c => c(app),//覆盖了原来的div
    
})