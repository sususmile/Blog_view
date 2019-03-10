$(function(){
    $("#col ul li:eq(1)").addClass("tec");

    $("#col ul li").mousedown(function(){
        $(this).addClass("tec");
        var index=$(this).index();
        $(this).siblings().removeClass("tec");
    });
    $(".searchTag").click(function () {
        var searchText = $(this).text();
        var len = $(".tags").length;
        $(".comment_block").css("display","none");
        for(var i=0;i<len;i++){
            if(searchText=="全部文章"){
                $(".comment_block").css("display","block");
            }
            else if(searchText==$(".tags").eq(i).text()){
                $(".tags").eq(i).parents(".comment_block").css("display","block");
            }
        }
    })
})