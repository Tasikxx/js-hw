play();

function play() {
	var start = confirm('Do you want to play the game?');
	if (start) {
		attempt1();
	}
	if (sum>2){
		nextgame();
		attempt1();
	}
	else {
		console.log('Today you will not win the jackpot, but you could');
	}

}



function game() {
		var pchoise = Math.floor(Math.random() * 5 );
	console.log(pchoise);
	return (pchoise);

}
function sum(number) {
	var sum = 0;
}

function attempt1 () {
		var sum = sum;
		var choise = game();
		userchoise = prompt('chyslo');
	 if (userchoise == choise) {
	 	alert('you win');
	 	sum+=10;
	 } else {
	 	alert('you lose');
	 	attempt2();
	 }
	 console.log('Your prize = ' + sum);
}

function attempt2 () {
		var choise = game();
		userchoise = prompt('chyslo');
	 if (userchoise == choise) {
	 	alert('you win');
	 	sum+=5;
	 } else {
	 	alert('you lose');
	 	attempt2();
	 }
	 console.log('Your prize = ' +sum);
}

function attempt3 () {
		var choise = game();
		userchoise = prompt('chyslo');
	 if (userchoise == choise) {
	 	alert('you win');
	 	sum+=2;
	 } else {
	 	alert('you lose');
	 	attempt3();
	 }
	 console.log('Your prize = ' +sum);
}

function nextgame () {
	sum*=3;
}