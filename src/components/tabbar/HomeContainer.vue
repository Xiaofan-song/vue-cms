<template>
    <div>
        <mt-swipe :auto="4000">
            <!--开始渲染-->
            <mt-swipe-item v-for="item in lubotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--这是中间部分-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <img src='../../images/menu1.png' alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src='../../images/menu2.png' alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src='../../images/menu3.png' alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src='../../images/menu4.png' alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src='../../images/menu5.png' alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src='../../images/menu6.png' alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                lubotuList: [],

            }
        },
        created() {
            //?????为什么没有调用这个方法---钩子函数--
            this.getLubotu();
        },

        methods: {
            getLubotu() {
                //获取轮播图数据的的方法
                this.$http.get("api/getlunbo").then(result => {
                    if (result.body.status === 0) {
                        this.lubotuList=result.body.message;
                        this.lubotuList.splice(1,1);//返回的新数组才是被删除的那个
                    } else {
                        Toast("获取轮播图失败")
                    }

                });
            }
        }
    };
</script>
<style scoped lang="scss">
.mint-swipe{
    height: 200px;
    img{
        width: 100%;
        height: 100%;
    }

}
.mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
    img{
        width: 60px;
        height: 60px;
    }
}

</style>