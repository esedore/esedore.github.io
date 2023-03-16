$(document).ready(function() {
    $(".active").show();
    $(".slider-div").hover(function(){$(".btn-carousel").show();},function(){$(".btn-carousel").hide();})
    $(".btn-carousel").on('click',function(){
        var id = $(this).attr('id');
        var nav;
        if(id=="previous") {
            nav = $("img.active").prev('img');
            if(nav.length == 0) nav = $("img").last();
        } else if(id=="next") {
            nav = $("img.active").next('img');
            if(nav.length == 0) nav = $("img").first();
        }
        $("img.active").hide();
        $("img.active").removeClass("active");
        nav.addClass("active");
        nav.fadeIn(1000);
    });	
});