var card = ['1','7','10','11','14','16','1','7','10','11','14','16'];
var current = null;

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

function flip(card){
	$(card).css('pointer-events', 'none');
    $(card).toggleClass('flipped');
	
    if (!current) {
        current = $(card);    
    } else {
        $('.card').css('pointer-events', 'none');
        if (current.attr('data-name') != $(card).attr('data-name')) {
            setTimeout(function(){
                document.getElementById('incorrect').play();
                current.toggleClass('flipped');
                $(card).toggleClass('flipped');
                current = null;
                $('.card').css('pointer-events', 'auto');
            },500);
        } else {
            setTimeout(function(){
                document.getElementById('correct').play();                                
                current.css('opacity','0');
                $(card).css('opacity','0');
                current = null;
                $('.card').css('pointer-events', 'auto');
            },500);
        }
    }
}

$(document).ready(function() {
    card = shuffle(card);
    var html='';
    for (var i=0;i<card.length;i++){
    	html+='<div class="card" data-name="' + card[i] + '" onclick = "flip(this)">' + 
        '<img class="back" src="img/back.jpg"/>' + 
        '<img class="front" src="img/' + card[i] + '.jpg"/></div>';
    }
    $('.wrap').html(html);
});

