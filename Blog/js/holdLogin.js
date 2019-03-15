$(function () {
    $.ajax({
        url : "http://localhost:8081/Blog/Status.do",//后台请求的数据
        type : "post",//请求方式
        async : true,//是否异步请求
        data:{"status":1},
        success : function(data) {
            var html = data;
            if(data!="null"){
                $("#user_status").html(html);
                $("#unLogin").css("display","none")
                $("#exit").text("[退出登录]");
                $("#log-in").css("left","20%")
            }

        }
    })
    $("#exit").click(function () {
        $.ajax({
            url : "http://localhost:8081/Blog/Status.do",//后台请求的数据
            type : "post",//请求方式
            async : true,//是否异步请求
            data:{"status":0},
            success : function(data) {
                if(data=="null"){
                    $("#unLogin").css("display","inline");
                    $("#user_status").html("");
                    $("#exit").remove();
                    $("#log-in").css("left","26%")
                }

            }
        })
    })
})