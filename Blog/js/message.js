$(function(){
    $("#col ul li:eq(2)").addClass("tec");

    $("#col ul li").mousedown(function(){
        $(this).addClass("tec");
        var index=$(this).index();
        $(this).siblings().removeClass("tec");
    });

    $.ajax({
        url : "http://localhost:8081/Blog/displayComment.do",//后台请求的数据
        type : "post",//请求方式
        async : true,//是否异步请求
        dataType:"json",
        data:{"a":3},
        success : function(data) {
            var dat = eval(data);
            for(var i=0;i<dat.length;i++){
                var html = "<div class=\"messageShow\">\n" +
                    "                <ul>\n" +
                    "                    <li>\n" +
                    "                        <div class=\"comment\">\n" +
                    "                            <img src=\"../img/blogbg.jpg\" alt=\"\" class=\"img-responsive\">\n" +
                    "                            <div class=\"comment_name\">"+dat[i].master.name+"</div>\n" +
                    "                            <div class=\"comment_content\">"+dat[i].content+"</div>\n" +
                    "                            <div class=\"comment_time\">"+dat[i].time+"</div>\n" +
                    "                        </div>\n" +
                    "                    </li>\n" +
                    "            </ul>\n" +
                    "        </div>";
                $("#comment_area").append(html);
            }

        }
    })

})

function subTest() {
    var content = document.getElementById("saytext").innerText;
    if(content==""){
        alert("内容不能为空");
        return false;
    }

    if($("#user_status").text()==""){
        alert("请先登录");
        return false;
    }
    $.ajax({
        url : "http://localhost:8081/Blog/Message.do",//后台请求的数据
        type : "post",//请求方式
        async : true,//是否异步请求
        data:{"content":content},
        success : function(data) {

        }
    })
}