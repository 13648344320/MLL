// 此文件引入至 footer-end.js 中
$(window).load(function(){
    // 请求footer1.html的html片段
    $.ajax({
        url:"footer1.html",
        type:"get",
        success:function(result){
            // 返回的result是footer1的所有html片段,要注意把html文件的head等部分内容注释掉
        // 用片段创建新的<header>元素,替换index.html中的#header1
        $(result).replaceAll("#footer1");
        // 顺便将css添加到页面
        $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head")
        }
    })
}) 