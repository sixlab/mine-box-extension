$(function () {
    $(".mcd-a").click(function () {
        if($(this).hasClass("active")){
            return;
        }else{
            $(".mcd-a").removeClass("active");
            $(this).addClass("active");
            $(".right-content").html("");
            let fun = $(this).attr("me:fun");

            if(meFun && meFun[fun]){
                meFun[fun]();
            }
        }
    });
});