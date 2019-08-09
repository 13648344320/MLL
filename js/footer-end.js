// 此文件引入至 index.html的#footer-end 中
$(window).load(function(){
    // 请求footer-end.html 的html片段
    $.ajax({
        url:"footer-end.html",
        type:"get",
        success:function(result){
            // 返回的result是footer-end的html片段
        // 用片段创建新的<footer>元素,替换footer1中的footer元素
        $(result).replaceAll("#footer-end");
        // 顺便将css添加到页面
        $(`<link rel="stylesheet" href="css/footer-end.css">`).appendTo("head")
        }
    })
})