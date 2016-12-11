var counter = 0;
while (counter <= 6) {
    var ryadok = '';
    var a= ' ';
    var b= '#'
    if (counter % 2 == 0) {
        while (ryadok.length <= 8) {
            ryadok = ryadok + b + a;
        }
    } else {
        while (ryadok.length <= 8) {
            ryadok = ryadok + a + b;
        }
    }
    console.log(ryadok);
    counter++;
}

