## md转html

### less + es6 + node + webpack 

## 运行

下载后 
```
npm i
npm start
```
- npm start执行两条命令，一条webpack去执行，一条node去执行。

- node对文件进行操作，读取和写入，引入marked包实现markdown转html，对hexo风格的md文件简单处理再转换。

- webpack 实现less转css的处理，以main.js为入口，找出相关依赖，进行打包，用HtmlWebpackPlugin通过模板文件生成html，webpack-dev-server服务器热加载html。

[预览](https://github.com/hellocassiell/md2html/blob/master/img/1.png)
