//The charAt() method returns the character at the specified index in a string.
let myStr = "Hello";
result1 = myStr.charAt(2);
console.log(result1);

//The concat() method joins two or more strings.
let text1 = "sea";
let text2 = "food";
let result2 = text1.concat(text2);
console.log(result2);

//The includes() method returns true if a string contains a specified string.
let text = "Hello World, welcome to the universe.";
let result3 = text.includes("to");
console.log(result3);

//adds strings to the start string
let text3 = "5";
result4 = text3.padStart(4, "0");
console.log(result4);

//The repeat() method returns a string with a number of copies of a string.
let text4 = " Hello world";
let result5 = text4.repeat(2);
console.log(result5);

//The split() method splits a string into an array of substrings.
// The split() method returns the new array.
// The split() method does not change the original string.
// If (" ") is used as separator, the string is split between words.
let text5 = "How are you doing today?";
let myArray = text5.split(" ");
console.log(myArray);

//The toLowerCase method converts a string to lowercase letters.
let text6 = "Hello World!";
let result6 = text6.toLowerCase();
console.log(result6);

//The length property returns the length of a string.
let text7 = "Hello World!";
let length = text.length;
console.log(length);

//The parseInt method parses a value as a string and returns the first integer.
let num = parseInt("10");
let num1 = parseInt("10.00");
let num2 = parseInt("10.33");
let num3 = parseInt("34 45 66");
let num4 = parseInt("   60   ");
let num5 = parseInt("40 years");
let num6 = parseInt("He was 40");

console.log(num, num1, num2, num3, num4, num5, num6);

//The toFixed() method converts a number to a string.
//The toFixed() method rounds the string to a specified number of decimals.
let num7 = 5.56789;
let n = num7.toFixed();
console.log(n);

//The Number.isNaN() method returns true if the value is NaN, and the type is a Number.
let result7 =
  "Is 123 NaN? " +
  Number.isNaN(123) +
  "<br>" +
  "Is -123 NaN? " +
  Number.isNaN(-1.23) +
  "<br>" +
  "Is '123' NaN? " +
  Number.isNaN("123") +
  "<br>" +
  "Is 0/0 NaN? " +
  Number.isNaN(0 / 0);

console.log(result7);

//The toString() returns a number as a string.
let num8 = 15;
let text8 = num8.toString();
console.log(text8);

//The Math.abs() method returns the absolute value of a number.
let a = Math.abs(7.25);
let b = Math.abs(-7.25);
let c = Math.abs(null);
let d = Math.abs("Hello");
let e = Math.abs(2 - 3);

console.log(a, b, c, d, e);

//The Math.max() method returns the number with the highest value.
let a1 = Math.max(5, 10);
let b2 = Math.max(0, 150, 30, 20, 38);
let c3 = Math.max(-5, 10);
let d4 = Math.max(-5, -10);
let e5 = Math.max(1.5, 2.5);

console.log(a1, b2, c3, d4, e5);

//The Math.ceil() method rounds a number rounded UP to the nearest integer.

let a6 = Math.ceil(0.6);
let b6 = Math.ceil(0.4);
let c6 = Math.ceil(5);
let d6 = Math.ceil(5.1);
let e6 = Math.ceil(-5.1);
let f6 = Math.ceil(-5.9);

console.log(a6, b6, c6, d6, e6);

//The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
let x = Math.random() * 100;
console.log(x);
