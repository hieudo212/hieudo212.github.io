var cards = ['1','7','10','11','14','16','1','7','10','11','14','16'];
var current = null;
var point = 0;
var run = null;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
    	randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
		temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

function sound(type) {
    document.getElementById(type).load();
    document.getElementById(type).play();
}

function flip(card){
	$(card).css('pointer-events', 'none');
    $(card).toggleClass('flipped');
	
    if (!current) {
        current = $(card);    
    } else {
        $('.card').css('pointer-events', 'none');
        if (current.attr('data-name') != $(card).attr('data-name')) {
            setTimeout(function(){
                sound('incorrect');
                current.toggleClass('flipped');
                $(card).toggleClass('flipped');
                current = null;
                $('.card').css('pointer-events', 'auto');
            },500);
        } else {
            setTimeout(function(){
                sound('correct');                                
                $(card).find('img').css({
                    'box-shadow': '0px 0px 15px 5px rgba(127,255,212,0.75)'
                });
                current.find('img').css({
                    'box-shadow': '0px 0px 15px 5px rgba(127,255,212,0.75)'
                });
                $(card).css('opacity','0');
                current.css('opacity','0');
                current = null;
                
                point++;
                if (point == cards.length/2) {
                    clearInterval(run);
                    win();
                } else {
                    $('.card').css('pointer-events', 'auto');    
                }
                
            },600);
        }
    }
}

function startGame(){
    $('.cover').hide();
    $('.dialog').hide();
    
    document.getElementById('win').load();
    document.getElementById('lose').load();
    sound('background');

    point = 0;
    run = null;
    current = null;
    cards = shuffle(cards);

    var html='';
    for (var i=0;i<cards.length;i++){
        html+='<div class="card" data-name="' + cards[i] + '" onclick = "flip(this)">' + 
        '<img class="back" src="img/back.jpg"/>' + 
        '<img class="front" src="img/' + cards[i] + '.jpg"/></div>';
    }
    $('.content').html(html);
    
    $('.bar').val('30');
    var remainTime = Number($('.bar').attr('value'));
    run = setInterval(function(){
        remainTime--;
        $('.bar').val(remainTime);
        if (remainTime == 0) {
            clearInterval(run);
            lose();
        }
    }, 1000);
}
function lose() {
    document.getElementById('background').load();
    $('.cover').show();
    $('.message').find('h1').text('Sorry, you lost...');
    $('.message').find('button').text('Play again');    
    $('.dialog').fadeIn();
    sound('lose');
}

function win() {
    document.getElementById('background').load();
    $('.cover').show();
    $('.message').find('h1').text('Congrat, you win!!!');
    $('.message').find('button').text('Play again');    
    $('.dialog').fadeIn();
    sound('win');
}

$(function(){
    document.getElementById('incorrect').volume = 0.5;
    document.getElementById('correct').volume = 0.5;
    $('.dialog').hide();
    $('.dialog').fadeIn();
})