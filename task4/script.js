var counter = 0;
while (counter <= 6) {
    var line = '';
    var a= ' ';
    var b= '#'
    if (counter % 2 == 0) {
        while (line.length <= 8) {
            line = line + b + a;
        }
    } else {
        while (line.length <= 8) {
            line = line + a + b;
        }
    }
    console.log(line);
    counter++;
}

