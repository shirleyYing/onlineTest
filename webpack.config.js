var webpack = require('webpack');
var path = require('path');
var pathName = "./src/js";
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');


//自定义"魔力"变量
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});


module.exports = {
    //上下文
    // context: pathName,
    //配置入口
    // 数组表示按配置顺序加载并合并到最后一个文件中去，并导出
    resolve: {
        root: path.resolve(pathName),
        extensions: ['', '.js', '.json']
    },
    entry: {
        student: ['router/router_student', 'app'],
        teacher:['router/router_teacher','app'],
        vender: ['jquery', 'underscore','backbone']
    },
    //配置输出
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: '[name].bundle.js?[hash]'
            //publicPath: '/assets/',
            //sourceMapFilename: '[file].map'
    },
    devtool: '#source-map',
    //模块
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "underscore-template-loader"
            } 
        ]
    },
    plugins: [
        //公用模块
        // new CommonsChunkPlugin('common.js', ['a', 'b']),
        //设置抽出css文件名
        // new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
        //     disable: false,
        //     allChunks: true
        // }),
        //定义全局变量
        // definePlugin,
        //设置此处，则在JS中不用类似require('./base')引入基础模块， 只要直接使用Base变量即可
        //此处通常可用做，对常用组件，库的提前设置
        //去除多个文件中的频繁依赖
        new webpack.ProvidePlugin({
            //Moment: 'moment' //直接从node_modules中获取
            // Base: '../../base/index.js' //从文件中获取
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery",
            "Backbone": "backbone",
            "_":"underscore"
        })
    ],
    //添加了此项，则表明从外部引入，内部不会打包合并进去
   /* externals: {
        jquery: 'window.jQuery',
        Backbone: 'window.backbone'

        // react: 'window.React',
        //...
    }*/
};