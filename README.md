## md转html命令行工具

### less + es6 + node + webpack + browser-sync

## 运行

下载后 
```
npm i
```
可以选择在md文件夹新建一个md文件，比如我这里创建了1.md，则在终端执行：
```
node index 1.md
```
打开 http://localhost:3000 ，此时还没有显示页面，当第一次保存md文件，会在html文件夹生成相应的html文件，再手动刷新一下浏览器，页面显示，此后每次保存md文件，页面自动刷新。

## 描述

- node 对文件进行操作，读取和写入，引入marked包实现markdown转html，对hexo风格的md文件简单处理再转换。

- webpack 实现less转css的处理，以及其他js的引入，以main.js为入口，找出相关依赖，进行打包，以bundle.js为出口。

- browser-sync 创建启动一个服务器，每次md文件修改后，使用browserSync.reload(文件名)完成浏览器端的自动刷新。


