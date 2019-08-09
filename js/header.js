//此文件引入至index.html的#header-model中
$(window).load(function(){
    // 请求header.html 的html片段
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            // 用片段创建新的header元素并替换index.html中的#header-model
            $(result).replaceAll("#header");
            // 顺便将css也添加进去
            $(`<link rel="stylesheet" href="../css/header.css">`)
        }
    })
})