<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <mt-swipe-item>4</mt-swipe-item>
        </mt-swipe>
        <h1>这是首页home</h1>
    </div>
</template>
<script>

export default {
    data() {
        return {
            mes:'13333',
            data:'我的项目我乐意'
        };
    },
    created() {
        //?????为什么没有调用这个方法---钩子函数
        console.log("哈哈");
        this.getLubotu();
    },

    methods: {
        getLubotu() {
            //获取轮播图数据的的方法
            this.$http.get("liulongbin.top:3005/api/getlunbo").then(result => {
                console.log(result.body);
                console.log("哈哈");
            });
        }
    }
};
</script>