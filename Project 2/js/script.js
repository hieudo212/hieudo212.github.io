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
    projectResponsive();

    $(window).resize(function(){
        projectResponsive();
    });

});

function projectResponsive() {
    if (window.innerWidth >= 768 && window.innerWidth <=991) {
        $('.project-container:nth-child(even)').each(function () {
            $(this).hover(
                function () {
                    $(this).css('width','66.67%');
                    $(this).prev().css('width','33.33%');
                }, function () {
                    $(this).css('width','50%');
                    $(this).prev().css('width','50%');
                }
            );
        });

        $('.project-container:nth-child(odd)').each(function () {
            $(this).hover(
                function () {
                    $(this).css('width','66.67%');
                    $(this).next().css('width','33.33%');
                }, function () {
                    $(this).css('width','50%');
                    $(this).next().css('width','50%');
                }
            );
        });
    } else {
        $('.project-container').removeAttr('style');
        $('.project-container').off();
    }
}

function checkY(){
    if( $(window).scrollTop() > 0 ){
        $('.box').css({'transform':'translateX(0)','opacity':1});
        $('.box-title').css({'transform':'translateX(0)','opacity':1});
        $('.slogan').find('h1').css({'transform':'translateY(0)','opacity':1});
        $('.slogan').find('a').css({'transform':'translateY(0)','opacity':1});
        $('.slogan').find('h3').animate({width:'100%',opacity:1},1500);
    }
}