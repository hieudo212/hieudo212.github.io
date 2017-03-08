var btnVal = '';
document.getElementById('value').innerText = '';
var operation = ["+","-","×","÷"];
var lastChar = '';
var dot = false;

function press (button){
	btnVal = button.innerHTML;
	var input = document.getElementById('value').innerText;
	if (operation.indexOf(btnVal) > -1){
		if (operation.indexOf(lastChar) > -1 && lastChar != '') {
			document.getElementById('value').innerText = input.substr(0,input.length-1)+btnVal;
			lastChar = btnVal;
		} else if (operation.indexOf(lastChar) == -1 && lastChar != '') {
			document.getElementById('value').innerText += btnVal;
			lastChar = btnVal;
		} 		
	}  else {
		document.getElementById('value').innerText += btnVal;
		lastChar = btnVal;
	}
	checkDot();
}

function btnDot(){
	var input = document.getElementById('value').innerText;
	if (!dot) {
		document.getElementById('value').innerText = input + '.';
	} 
	lastChar = '.';
	dot = true;
}

function checkDot(){
	var input = document.getElementById('value').innerText;
	if (input.search(/\./) > -1){
		dot=true;
	} else {
		dot=false;
	}
}

function backSpace(){
	var temp = document.getElementById('value').innerText;
	document.getElementById('value').innerText = temp.substr(0,temp.length-1);
	lastChar = temp.slice(-2,-1);
	checkDot();
}

function clr(){
	document.getElementById('value').innerText = "";
	lastChar = '';
	dot=false;
}

function btnEqual(){
	var input = document.getElementById('value').innerText;
	input = input.replace(/×/g, '*').replace(/÷/g, '/');
	document.getElementById('value').innerText = eval(input);
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();
}

function btnSqrt(){
	var input = document.getElementById('value').innerText;
	document.getElementById('value').innerText = Math.sqrt(input);
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();
}

function btnSq(){
	var input = document.getElementById('value').innerText;
	document.getElementById('value').innerText = input*input;
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();	
}

function btnFact(){
	var input = Number(document.getElementById('value').innerText);
	var factorial = 1;
	if (Number.isInteger(input)){
		for (var i = 1; i<=input; i++){
			factorial *=i;
		}
	}
	else {factorial='invalid'}
	document.getElementById('value').innerText = factorial;
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();		
}

function btnInv(){
	var input = document.getElementById('value').innerText;
	document.getElementById('value').innerText = 1/input;
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();			
}

function btnMinus(){
	var input = document.getElementById('value').innerText;
	document.getElementById('value').innerText = -input;
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();	
}

function btnPerc(){
	var input = document.getElementById('value').innerText;
	document.getElementById('value').innerText = input/100;
	lastChar = document.getElementById('value').innerText.slice(-1);
	checkDot();				
}