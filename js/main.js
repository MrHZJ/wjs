/**
 * Created by zhijun on 2017/4/4.
 */
$(function () {
   // alert($);

    //自适应轮播

    function resize(){
        var $windowWidth = $(window).width();
        var isSmallScreen = $windowWidth < 768;

        $('#slide >#carousel-example-generic>.carousel-inner >.item').each(function(i,ele){
            var $item = $(ele);
            var imgSrc = $item.data(isSmallScreen ? "image-xs" : "image-lg");

            isSmallScreen ? $item.html('<img src='+imgSrc+' alt="" >') : $item.empty();
            $item.css('backgroundImage', 'url('+imgSrc+')');

        });
    }

    $(window).on('resize',resize).trigger('resize');

    //init_tooltips
    $('[data-toggle="tooltip"]').tooltip()
});