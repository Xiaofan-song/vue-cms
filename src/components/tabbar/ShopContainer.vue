<template>
    <div class="shopcar-container">
        <div class="mui-card" v-for="(item,i) in goodsinfo" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getSwitchStatus[item.id]"
                               @change="switchChanged(item.id,$store.getters.getSwitchStatus[item.id])"
                    >
                    </mt-switch>
                    <img :src="item.thumb_path">
                    <div class="info">
                        <h3>{{item.title}}</h3>
                        <p class="detail">
                            <span class="price">¥{{item.sell_price}}</span>
                            <numbox style="height: 30px" :goodscount="$store.getters.getGoodsCount[item.id]"
                                    :goodsid="item.id"></numbox>
                            <a @click.prevent="removeGoods(item.id,i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="jiesuan">
                        <div class="left">
                            <p>总计(不含运费)</p>
                            <p>已勾选商品&nbsp;<span class="red">{{$store.getters.getGoodsAmountAndPrice.amount}}&nbsp;
                            </span>件,总价:&nbsp;&nbsp;<span
                                    class="red">¥{{$store.getters.getGoodsAmountAndPrice.price}}</span></p>
                        </div>
                        <mt-button size="small" type="danger">去结算</mt-button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                goodsinfo: []//所有商品列表
            }
        },
        created() {
            this.getGoodslist();
        },
        methods: {
            getGoodslist() {
                //获得仓库里面的所有的商品列表
                var idArr = [];
                this.$store.state.car.forEach(item => idArr.push(item.id));
                //如果IDArr为空的话,则会报错,如果是0,则返回,不执行下面的代码
                if (idArr.length <= 0) {
                    return;
                }
                this.$http.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result => {
                    if (result.body.status === 0) {
                        this.goodsinfo = result.body.message;

                    } else {
                        console.log(idArr);
                        Toast("获取列表失败")
                    }


                })
            },
            removeGoods(id, i) {
                //根据id和索引来删除本地的列表和store中的
                this.goodsinfo.splice(i, 1);//删除本地的数据
                this.$store.commit('removeTocar', id);//删除store中的数据

            },
            switchChanged(id, Val) {
                this.$store.commit('updateSwitch', {id, selected: Val})
                //拿到最新的数据,需要向store中更新
                //console.log(id, Val)
            }

        },
        components: {numbox}
    }

</script>

<style lang="scss" scoped>
    .shopcar-container {
        background-color: #eeeeee;
        overflow: hidden;

        .mui-card-content-inner {
            display: flex;
            align-items: center;

            img {
                margin-left: 5px;
                width: 60px;
                height: 60px;
            }

            .info {
                margin-left: 10px;

                h3 {
                    margin-bottom: 10px;
                    font-size: 14px;
                }

                .detail {
                    margin: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price {
                        font-size: 15px;
                        color: red;
                        font-weight: bold;
                    }
                }
            }
        }

        .jiesuan {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 355px;

            .left {
                .red {
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
            }

        }
    }
</style>