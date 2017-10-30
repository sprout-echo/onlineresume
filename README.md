# online-resume

首先使用vue-cli脚手架安装环境，并执行npm install命令安装依赖

再安装其他所需要的模块:
objectpath可以根据指定的格式读取到json格式数据的相应位置的数据，我们在demo中更新数据文档的时候使用到
```
npm install --save objectpath
```
html2canvas和jspdf用于将html读取成一张图片，然后将图片插入到pdf中，从而实现将html页面导出成pdf文件的功能
```
npm install --save html2canvas jspdf
```

