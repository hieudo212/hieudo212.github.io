$(document).ready(function(){
    // $('.box').css({'transform':'translateX(0)','opacity':1});
    // $('.box-title').css({'transform':'translateX(0)','opacity':1});
    $(window).scroll(function(){
        checkY();
    });
    
    // Do this on load just in case the user starts half way down the page
    checkY();
    
    $('.box').each(function () {
        var countTo = Number($(this).find('.count').text());
        $(this).mouseenter( function() {
            $(this).find('.count').prop('counter',0).animate({
                counter: countTo
            }, {
                duration: 800,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); 
    });

    // Solution 1
    // $('.even-item').each(function () {
    //     $(this).hover(
    //         function () {
    //             $(this).css({'max-width':'66.67%','margin':'0'})
    //             $(this).prev().css('margin',0);
    //         }, function () {
    //             $(this).css({'max-width':'33.33%','margin':'0 8.33%'})
    //             $(this).prev().css('margin','0 8.33%');
    //         }
    //     );
    // });

    // $('.odd-item').each(function () {
    //     $(this).hover(
    //         function () {
    //             $(this).css({'max-width':'66.67%','margin':'0'})
    //             $(this).next().css('margin',0);
    //         }, function () {
    //             $(this).css({'max-width':'33.33%','margin':'0 8.33%'})
    //             $(this).next().css('margin','0 8.33%');
    //         }
    //     );
    // });

});

function checkY(){
    if( $(window).scrollTop() > 0 ){
        $('.box').css({'transform':'translateX(0)','opacity':1});
        $('.box-title').css({'transform':'translateX(0)','opacity':1});
        $('.slogan').find('h1').css({'transform':'translateY(0)','opacity':1});
        $('.slogan').find('a').css({'transform':'translateY(0)','opacity':1});
        $('.slogan').find('h3').animate({width:'100%',opacity:1},1500);
    }
}