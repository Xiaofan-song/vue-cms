<template>
    <div>
        <mt-swipe :auto="4000">
            <!--开始渲染-->
            <mt-swipe-item v-for="item in lubotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div></a></li>
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
            //?????为什么没有调用这个方法---钩子函数
            console.log("哈哈");
            this.getLubotu();
        },

        methods: {
            getLubotu() {
                //获取轮播图数据的的方法
                this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
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
    height: 300px;
    img{
        width: 100%;
        height: 100%;
    }

}

</style>