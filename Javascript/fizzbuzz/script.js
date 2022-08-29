for (var i=1; i<100; i++) {
    if (i%5 == 0 && i%3 == 0) {
        x = "FizzBuzz";
        console.log(x);
    }
    else if (i%3 == 0) {
        y = "Fizz";
        console.log(y);
    }
    else if (i%5 == 0) {
        z = "Buzz";
        console.log(z);
    }
    else {
        console.log(i);
    }
}