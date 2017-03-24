var startY;
var arr;
var w;

$(document).ready(function(){
    $(".product").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            400:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,  
            }
        }
    });
    $(".video").owlCarousel({
        loop:true,
        margin:10,
        center:true,
        nav:true,
        autoWidth: true
        // merge:true,
        // responsiveClass:true,
        // responsive:{
        //     0:{
        //         items:1,
        //     },
        //     400:{
        //         items:2,
        //     },
        //     992:{
        //         items:3,
        //     },
        //     1200:{
        //         items:4,  
        //     }
        // }
    });    
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');

    $(window).scroll(function(){
        checkY();
    });
    $(window).resize(function() {
        checkY();
    });
    // Do this on load just in case the user starts half way down the page
    checkY();

});

function checkY(){
    startY = $('header').position().top + $('header').outerHeight() + $('#menu').outerHeight();
    if( $(window).scrollTop() > startY ){
        if (window.innerWidth > 1310) {
            $('#menu').removeClass('navbar-fixed-top');
            $('.side-menu').slideDown();
        } else {
            $('.side-menu').slideUp();
            $('#menu').addClass('navbar-fixed-top');
        }
    }else{
        $('.side-menu').slideUp();
        $('#menu').removeClass('navbar-fixed-top');
    }
}