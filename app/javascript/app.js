$(function(){
    $('#innerpage').load("/limelightnss/app/pages/home.html");

    $("#daily_running_news_list").on("click",function(){
        $('#innerpage').load("/limelightnss/app/pages/daily_running_news_list.html");

    });
    $("#home").on("click",function(){
        $('#innerpage').load("/limelightnss/app/pages/home.html");

    });

    $("#important_blog").on("click",function(){
        $('#innerpage').load("/limelightnss/app/pages/important_blog.html");

    });
    $("#important_site_path").on("click",function(){
        $('#innerpage').load("/limelightnss/app/pages/important_site_path.html");

    });
    $("#travel_related_site_in_india").on("click",function(){
        $('#innerpage').load("/limelightnss/app/pages/travel_related_site_in_india.html");

    });
});
