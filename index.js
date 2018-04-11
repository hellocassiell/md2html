const path = require('path');
const fs = require('fs');
const marked = require('marked');
// 命令行传入的参数,表明md文件路径，如: './1.md'
var target = path.join(__dirname, process.argv[2]);


// fs模块监视文件
fs.watchFile(target, {
    persistent: true,
    interval: 200
}, (curr, prev) => {
    //修改时间判断
    if (curr.mtime === prev.mtime) {
        return false;
    };
    fs.readFile(target, 'utf8', (err, data) => {
        if (err) throw err;

        var title, dataAll;
        if (data.search('title:') != -1) {
            title = Totitle(data);
            dataAll = data.split("---")[2];
        } else {
            title = '未设标题';
            dataAll = data;
        }

        var html = marked(dataAll);



        var allHtml = template.replace('{{{content}}}', html).replace('{{{title}}}', title);
        // 写入html文件
        fs.writeFile('./index.tmpl.html', allHtml, 'utf8', (err) => {
            if (err) throw err;
            console.log('写入成功！');

        });
    });
});
// md的title获取
function Totitle(data) {
    var arr = data.split(/\n/);
    var str;
    arr.forEach((item, index) => {
        if (item.search('title:') != -1) {
            str = item;
        }
    })
    return str.substr(str.search('title:') + 6).trim();



}

var template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ProductAI</title>
    
</head>
<body>
<header id="header" class="page-hd">
ProductAI 开发者文档
</header>
<aside class="sidebar">
</aside>
<div class="page-bd">
    <article class="post">
    <header class="post-hd">
      {{{title}}}
    </header>
    <div class="post-bd">
     {{{content}}}
    </div>
    </article>
</div>
</body>
</html>
`;