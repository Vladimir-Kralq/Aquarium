
/*Дължина в см – цяло число в интервала [10 … 500]

2. Широчина в см – цяло число в интервала [10 … 300]

3. Височина в см – цяло число в интервала [10… 200]

4. Процент – реално число в интервала [0.000 … 100.000] */








function akvarium (input) {

let length = Number(input[0]);
let width = Number(input[1]);
let high = Number(input[2]);
let procent = Number(input[3]);

let procentDecimal = procent / 100;
let obemAkvarium= length * width * high;

let transferrLitri= obemAkvarium * 0.001;
let total = transferrLitri * (1 - procentDecimal)
console.log(total)
}


akvarium(["85 ", "75 ", "47 ","17 "]);