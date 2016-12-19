wanna = confirm('Do you want play?')
if (!wanna) {
        console.log("You were so close");
    } else
    {
        newgame()
    }
    


function newgame() {

var pchoise = Math.random() * 100;
var pchoise = parseInt(pchoise);
console.log(pchoise);

while (userchoise !== pchoise)  {
    var userchoise = prompt('Please, enter you number : ');
     if (userchoise > pchoise) {
        alert ('Our number is lower. Try again!');
    }
    else if (userchoise < pchoise) {
        alert('Our number is higher. Try again!');
    }
    else {
        alert ('You are right, the number is ' + userchoise);
           break;
         }
    }

}
