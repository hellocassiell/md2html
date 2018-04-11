//main.js 入口文件
// 单一的入口，其它的模块需要通过 import, require, url等与入口文件建立其关联
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());


// 使用ES6的模块定义和渲染Greeter模块



import './main.less';



// const greeter = require('./Greeter.js');

// const path = require('path');
// const fs = require('fs');
// const marked = require('marked');
// var target = path.join(__dirname,process.argv[2]);

// fs.watchFile(target,{persistent:true,interval:200},(curr,prev)=>{
//     if(curr.mtime === prev.mtime){
//         return false;
//     };
//     fs.readFile(target,'utf8',(err,data)=>{
//         if(err) throw err;
        
//         var title = Totitle(data);
//         var dataAll = data.split("---")[2];
//         var html = marked(dataAll);
    

//         document.querySelector(".post-hd").innerHTML = title;
       
           
       
//     });
// });

// function Totitle(data){
//     var arr = data.split(/\n/);
//         var str;
//         arr.forEach(function(item,index){
//             if(item.search('title:') != -1)
//             {   str = item;
//             }
//         })
       
//     return str.substr(str.search('title:') + 6).trim();
      
      
// }

