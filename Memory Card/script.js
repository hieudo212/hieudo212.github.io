var card = ['1','7','10','11','14','16','1','7','10','11','14','16'];

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
	if (!$(card).hasClass('flipped')){
		$(card).toggleClass('flipped');
	}	
}

$(document).ready(function() {
    card = shuffle(card);
    var content='';
    for (var i=0;i<card.length;i++){
    	content+='<div class="card" onclick = "flip(this)">' + '<img class="back" data-id="' + card[i] + '" src="img/back.jpg"/>' + '<img class="front" src="img/' + card[i] + '.jpg"/></div>';
    }
    $('.wrap').html(content);
});

