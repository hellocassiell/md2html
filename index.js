const path = require('path');
const fs = require('fs');
const marked = require('marked');
var template = require('./public/js/template.js');
// 命令行传入的参数,输入md文件名称，如: '1.md'
var target = path.join(__dirname+'/md', process.argv[2]);
var filename = process.argv[2].replace(path.extname(process.argv[2]),'.html');
var filePath = path.join(__dirname+'/html', filename);


const browserSync = require('browser-sync');
browserSync({
    browser: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    server:path.dirname(filePath),
    index:path.basename(filename),
    notify:false
});


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
            title = '';
            dataAll = data;
        }

        var html = marked(dataAll);



        var allHtml = template.replace('{{{content}}}', html).replace('{{{title}}}', title);
        // 写入html文件
        fs.writeFile('./html/'+filename, allHtml, 'utf8', (err) => {
            if (err) throw err;
            console.log('写入成功！');
            browserSync.reload(path.basename(filePath+filename));
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

