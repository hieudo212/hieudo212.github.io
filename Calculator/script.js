var btnVal = '';
var operation = ["+","-","×","÷"];
var lastChar = '';
var dot = false;
var input = document.getElementById('value').innerText;	

function press (button){
	btnVal = button.innerHTML;
	if (operation.indexOf(btnVal) > -1){
		if (operation.indexOf(lastChar) > -1 && lastChar != '') {
			input = input.substr(0,input.length-1)+btnVal;
			lastChar = btnVal;
			dot = false;
		} else if (operation.indexOf(lastChar) == -1 && lastChar != '') {
			input += btnVal;
			lastChar = btnVal;
			dot = false;
		} 		
	}  else {
		input += btnVal;
		lastChar = btnVal;
	}
	document.getElementById('value').innerText = input;
}

function btnDot(){
	if (!dot) {
		input = input + '.';
	} 
	lastChar = '.';
	dot = true;
	document.getElementById('value').innerText = input;
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
	document.getElementById('value').innerText = input;
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
	document.getElementById('value').innerText = input;	
}

function clr(){
	input = "";
	lastChar = '';
	dot=false;
	document.getElementById('value').innerText = input;
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