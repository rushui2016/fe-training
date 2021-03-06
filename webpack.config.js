/**
 * Created by slashhuang on 16/5/5.
 */
var path = require("path");
var webpack =require('webpack');
module.exports = {
    entry: {
        pure_redux: "./src/js基础之redux实战/单个redux/pure_redux.js",
        reactRedux:"./src/js基础之redux实战/redux+react/react_redux.js"
    },
    output: {
        path: path.join(__dirname,'src/js基础之redux实战/'),//必须是绝对路径
        filename: '[name].js',
        publicPath: "/static/",//调试地址为相对路径,它会观察所有bundle的文件，从此publicPath更新内存中的js文件获取
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ],
        resolve: {
            extensions: ['.js']
        }
    }
};