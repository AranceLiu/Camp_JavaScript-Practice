// #1 for
for (var i = 5; i > 0; i = i - 2) {
    console.log("你好" + i)
    // console.log(`你好${i}`)
}
// #1 while
var a = 5
while (a > 0) {
    console.log("你好" + a)
    a = a - 2
}


// #2 for

for (var x1 = 1; x1 <= 9; x1++){
    for (var x2 = 1; x2 <= 9; x2++){
        console.log(x1 + "x" + x2 + "=" + x1*x2)
        // console.log(`${x1} x ${x2} = ${x1 *x2}`)
     }
}

// #2 while

var x = 1
var y = 1

while (x <= 9){
    while (y <= 9){
        console.log(x + "x" + y + "=" + x*y)
        y = y + 1

    }    
    y = 1
    x = x + 1
}




// #3 for
for (var num = 1; num <=5; num++){
    console.log("*".repeat(num))
}

// #3 while
var numw = 1
while (numw <=5){
    console.log("*".repeat(numw))
    numw = numw + 1
}

// #3.5 for

for (var num1 = 1; num1 <=5; num1++){
    console.log(" ".repeat(5-num1) + "*".repeat(num1 * 2 -1))
}
 

// #3.5 while
var num2 = 1
while (num2 <=5){
    console.log(" ".repeat(5-num2) + "*".repeat(num2 * 2 - 1))
    num2 = num2 + 1
}
