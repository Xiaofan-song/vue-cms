<template>
    <div>
        <mt-swipe :auto="4000">
            <!--开始渲染-->
            <mt-swipe-item v-for="item in lubotuList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <h1>这是首页home</h1>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                lubotuList: []
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
                    } else {
                        Toast("获取轮播图失败")
                    }

                });
            }
        }
    };
</script>
<style scoped lang="scss">


</style>