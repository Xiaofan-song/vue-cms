<template>
  <div class="header-container">
    <!--header部分-->
    <mt-header fixed title="just do it"></mt-header>

    <!-- 路由占个坑 -->
    <router-view></router-view>
    <!--路由部分-->
    <!--Tabbar部分-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
</script>
<style>
.header-container {
  padding-top: 40px;
}
</style>