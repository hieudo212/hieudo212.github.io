var btnVal = '';
var operation = ["+","-","×","÷"];
var lastChar = '';
var dot = false;
var input = $('#value').text();	
var themeNo = 1;

function theme () {
	switch (themeNo){
		case 1:
			$('.wrap').css("background-color","#7fffd4");
			$('.wrap').css("border-color","#006644");
			$('button').css("background-color","#ccffee");
			$('.screen').css("background-color","#ccffee");
			$('.screen').css("border-color","#006644");
			themeNo++;
			break;
		case 2:
			$('.wrap').css("background-color","#a6a6a6");
			$('.wrap').css("border-color","#696969");
			$('button').css("background-color","#d9d9d9");
			$('.screen').css("background-color","#d9d9d9");
			$('.screen').css("border-color","#696969");
			themeNo++;
			break;
		case 3:
			$('.wrap').css("background-color","#deb887");
			$('.wrap').css("border-color","#d2691e");
			$('button').css("background-color","#fff8dc");
			$('.screen').css("background-color","#fff8dc");
			$('.screen').css("border-color","#d2691e");
			themeNo = 1;
			break;
	}
}

function press (button){
	btnVal = button.html();
	if (jQuery.inArray(btnVal, operation) > -1){ 
		if (jQuery.inArray(lastChar, operation) > -1 && lastChar != '') {
			input = input.substr(0,input.length-1)+btnVal;
			lastChar = btnVal;
			dot = false;
		} else if (jQuery.inArray(lastChar, operation) == -1 && lastChar != '') {
			input += btnVal;
			lastChar = btnVal;
			dot = false;
		} 		
	}  else {
		input += btnVal;
		lastChar = btnVal;
	}
	$('#value').text(input);
}

function btnDot(){
	if (!dot) {
		input = input + '.';
	} 
	lastChar = '.';
	dot = true;
	$('#value').text(input);
}

function checkDot(){
	if (input.search(/\./) > -1){
		dot=true;
	} else {
		dot=false;
	}
}

function update(){
	lastChar = input.slice(-1);
	checkDot();
	$('#value').text(input);
}

function backSpace(){
	var remove = input.slice(-1);
	input = input.substr(0,input.length-1);
	lastChar = input.slice(-1);
	if (remove == '.') {
		dot = false;
	} else {
		checkDot();
	}
	$('#value').text(input);	
}

function clr(){
	input = "";
	lastChar = '';
	dot=false;
	$('#value').text(input);
}

function btnEqual(){
	input = input.replace(/×/g, '*').replace(/÷/g, '/');
	input = eval(input).toString();
	update();
}

function btnSqrt(){
	input = Math.sqrt(input).toString();
	update();
}

function btnSq(){
	input = (input*input).toString();
	update();
}

function btnFact(){
	var factorial = 1;
	if (Number.isInteger(Number(input)) && Number(input) >= 0){
		for (var i = 1; i<=input; i++){
			factorial *=i;
		}
	}
	else {factorial='invalid'}
	input = factorial.toString();
	update();
}

function btnInv(){
	input = (1/input).toString();
	update();
}

function btnMinus(){
	input = (-input).toString();
	update();
}

function btnPerc(){
	input = (input/100).toString();
	update();
}