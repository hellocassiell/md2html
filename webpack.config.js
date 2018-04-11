const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",//唯一入口文件
    output: {
      path: __dirname + "/build",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        port: 8088,  //设置默认监听端口，如果省略，默认为”8080“
        historyApiFallback: true,//不跳转
        inline: true, //实时刷新
        hot: true
      } ,
      module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/, //用以匹配loaders所处理文件的拓展名的正则表达式
                use: {
                    loader: "babel-loader",
                    //可以把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件中
                    // options: {
                    //     presets: [
                    //         "env", "react"
                    //     ]
                    // }
                },
                exclude: /node_modules/  //屏蔽不需要处理的文件（文件夹）
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  'less-loader'
                
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
      }
};
  
//   “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

// 有了这个配置之后，只需在终端里运行webpack这条命令,会自动引用webpack.config.js文件中的配置选项