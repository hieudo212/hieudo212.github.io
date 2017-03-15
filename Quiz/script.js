var pack = [];
var answer = null;
var i = 0;
var life = 3;
var point = 0;

pack[0] = {
	question: "Đâu không phải là một trình duyệt web?",
	answers: ["Firefox","Chrome","Internet Explorer","Cốc cốc"],
	correct:  "Internet Explorer"
}

pack[1] = {
	question: "Kênh thông tin nhanh nhất?",
	answers: ["Internet","Báo đài","Tivi","Phụ nữ"],
	correct:  "Phụ nữ"
}

pack[2] = {
	question: "Đâu không phải tên một bài hát do ca sĩ Trung Quân Idol thể hiện?",
	answers: ["Chuyện mưa","Dấu mưa","Cầu mưa","Gọi mưa"],
	correct:  "Cầu mưa"
}

pack[3] = {
	question: "Quốc hiệu nước ta dưới thời vua An Dương Vương?",
	answers: ["Hoan Lạc","Âu Lạc","Lạc Trôi","Củ Lạc"],
	correct:  "Âu Lạc"
}

pack[4] = {
	question: "Con gì đập thì sống, không đập thì chết?",
	answers: ["Con người","Con tim","Con muỗi","Con sông"],
	correct:  "Con tim"
}

function press(button) {
	$('.answer').find('button').css({'color':'#000','font-weight':'normal'})
	$(button).css({'color':'#6495ED','font-weight':'bold'});
	answer = $(button).html();
	$('.mark').find('button').css({'pointer-events': 'auto', 'opacity':1});
}

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

function start() {
	$('.cover').hide();
	$('.dialog').hide();
	$('.wrap').css('opacity',1);
	window.sessionStorage.score = '';
	pack = shuffle(pack);
	for (var j=0; j<5; j++) {
		pack[j].answers = shuffle(pack[j].answers);
	}
	loadPack(0);
	$('.wrap').fadeIn();
}

function loadPack(i) {
	$('.question').find('p').html(pack[i].question);
	for (var j=0; j<4; j++) {
		$('#answer'+j).html(pack[i].answers[j]);
	}
	$('.mark').find('button').css({'pointer-events':'none','opacity':0.5});
}

function check(btn) {
	if ($(btn).hasClass('next')) {
		$('.answer').find('button').css({'color':'#000','font-weight':'normal'})
		answer = null;
		$('.symbol').html('');
		i++;
		if (i==5) {
			result();
		} else {
			loadPack(i);
			$(btn).toggleClass('next');
			$(btn).html('Check');
		}		
	} else {
		if (answer == pack[i].correct) {
			$('.symbol').html('<img src="img/correct.png">');
			point++;
		} else {
			$('.symbol').html('<img src="img/incorrect.png">');
			$('#life'+life).css('opacity','0');
			life--;
			if (life==0) {
				result();
			}
		}
		$(btn).toggleClass('next');
		$(btn).html('Next');
	}	
}

function result() {
	if (life==0) {
		window.sessionStorage.mess = 'Game Over!!!';
		window.location.href = "result.html";
	} else {
		window.sessionStorage.mess = 'Congratulation!!!';
		window.sessionStorage.score = 'Your score is: ' + point + '/5';
		window.location.href = "result.html";
	}
}

function restart() {
	window.location.href = "quiz.html";
}

$(document).ready(function() {
    if (window.location.href == "file:///C:/Users/Laptop88/Desktop/HTML%20Course/Quiz/result.html") {
        var message = window.sessionStorage.mess;
        $('.result').find('h1').html(message);
        var score = window.sessionStorage.score;
        $('.result').find('h2').html(score);
        $('.result').css('transform','scale(1)');
    } 
});
