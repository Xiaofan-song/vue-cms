const path = require('path');


const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    mode: "development",
    plugins: [//配置第三方插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},//这是配置 babel 转化高级语法
            {test: /\.vue$/, use: 'vue-loader'},//这是配置处理 vue 组件的
            {test: /\.css$/, use: ['style-loader', 'css-loader']},//这是配置处理 css 组件的
            // {test: /\.css$/, loader: 'style-loader!css-loader'}
            {test:/.(png|gif|jpg|svg|ttf)$/, use:'file-loader'}
        ]
    },
    resolve: {
        alias: {
            // 'vue$':'vue/dist/vue.js'
        },//设置Vue被导入包的路径
    }


}