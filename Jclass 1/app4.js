let Gcd;
let firstNumber;
let secondNumber;
findGcd(13, 0);
function findGcd(num1, num2) {
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      Gcd = i;
      firstNumber = num1;
      secondNumber = num2;
    }
  }
}
console.log(
  "The Greatest Common Divisor of",
  firstNumber,
  "and",
  secondNumber,
  "is",
  Gcd
);
////////////////////////////////////////////////////////////////////////////
//Prompt the user to enter in the dimensions
let Rectangle1;
let Rectangle2;
findArea(5, 10, 3, 3);
function findArea(area1W, area1L, area2W, area2L) {
  let Rectangle1 = area1W * area1L;
  let Rectangle2 = area2W * area2L;
  console.log("#1 has an area of", Rectangle1);
  console.log("#2 has an area of", Rectangle2);
  if (Rectangle1 > Rectangle2) {
    console.log("#1 is larger than Rectangle #2");
  } else if (Rectangle1 == Rectangle2) {
    console.log("#1 is the same as Rectangle #2");
  } else {
    console.log("#1 is less than Rectangle #2");
  }
}
////////////////////////////////////////////////////////////////////////////
//prompts the user to enter in a postive number
// let personInput = prompt("Please enter a postive number", "number please");

// function (params) {

// }

////////////////////////////////////////////////////////////////////////////
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let g = 7;
let h = 8;
let i = 9;

let outPuta;
let outPutb;
let outPutc;
let outPutd;
let outPute;
let outPutf;
let outPutg;
let outPuth;
let outPuti;

for (let max = 1; max <= i; max++) {
  let outPuta = max * a;
  let outPutb = max * b;
  let outPutc = max * c;
  let outPutd = max * d;
  let outPute = max * e;
  let outPutf = max * f;
  let outPutg = max * g;
  let outPuth = max * h;
  let outPuti = max * i;
  console.log(
    outPuta,
    outPutb,
    outPutc,
    outPutd,
    outPute,
    outPutf,
    outPutg,
    outPuth,
    outPuti
  );
}
