// let bDay = 2006;

// let fYear = 2022;

// let age = fYear - bDay;

// console.log(age);

// if (age == 16) {
//   console.log("hi");
// }
//////////////////////////////
// let sp = 0;
// let fr = 0;

// let spanish = sp;
// let french = fr;

// if (sp > 0) {
//   console.log("Hola mundo");
// } else if (fr > 0) {
//   console.log("Salut tout le monde");
// } else {
//   console.log("Hello world");
// }

// let a = 4;

// let x = 1 + (a *= ++a);

// console.log(x);
////////////////////////////////////

// const userInput =parseint (promt ("what happens"));
// console.log(userInput);
// console.log(typeof userInput)

// const user2Input = +promt("what happens");
// console.log(user2Input);
// console.log(typeof user2Input);

// alert ("some value");
// console.log ("samething after the alert");

/////////////////////////////////////

// const num= 10;

// let message;
// if (num < 10) {
//   message = "less than 10";
// } else{
//   message = "greater than 10";
// }

///////////
// const massage = num >= 10 ? 'greater than 10' : 'less than 10';
// console.log (message);
///////////

// const exp = 'one';
// switch (exp) {
//   case 'one':
//       console.log ('value is one')
//       break;
//   case 'two':
//       console.log ('vale is two')
//       break;
//   default:
//      console.log ('value is not one or two');
// }

///////////

// let browser = "Chrome";

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }

/////////

// let browser = "Edge";

// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Edge" ||
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

/////////////////////////////////////////////

// Aries: March 21–April 20
// Taurus: April 21–May 21
// Gemini: May 22–June 21
// Cancer: June 22–July 22
// Leo: July 23–August 22
// Virgo: August 23–September 23
// Libra: September 24–October 23
// Scorpio: October 24–November 22
// Sagittarius: November 23–December 21
// Capricorn: December 22–January 20
// Aquarius: January 21–February 19
// Pisces: February 20–March 20
///////////////

// let bDay = 20;
// let bMounth = 5;
// let sign = '';

// let January = 'Aquarius';
// let February = 'Pisces';
// let March = 'Aries';
// let April = 'Taurus';
// let May = 'Gemini';
// let June = 'Cancer';
// let July = 'Leo';
// let August = 'Virgo';
// let September = 'Libra';
// let October = 'Scorpio';
// let November = 'Sagittarius';
// let December = 'Capricorn';

// if (bDay > 21) {
//   sine = 'Aquarius'
// } else if () {

// }

// if (bMounth === January) {
// }

// console.log(bMounth);

// alert (sign)

//////////////////////////////////////////////////////////
// let userInput = parseInt(prompt("num plz"));

// while (userInput > 0 || userInput < 10) {
//   userInput = parseInt(prompt("num plz"));
// }

// alert(userInput);

//

// function repeatStr(num, outPutstring) {
//   let outPut = "";

//   for (let i = 0; i < num; i++) {
//     outPut += outPutstring;
//   }

//   return outPut;
// }

// console.log(repeatStr(6, "i"));

///////////////////////////////////////////////////////////

// function fizzBuzz(num, canBeDivided) {

//  if (num % canBeDivided == 0) {
//    console.log("fizz");
//  }else if ()

// }

// function fizzBuzz(num,fizz,buzz) {
//   if (num % buzz == 0 && num % fizz == 0) {
//     console.log("FizzBuzz");
//   } else if (num % buzz == 0) {
//     console.log("buzz");
//   } else if (num % fizz == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(num);
//   }
// }

// fizzBuzz(100,3,5);

// function beerWall(num) {
//   for (let i = 0; i <= num; num--) {
//     return num;
//   }

//   console.log(num + "bottles of beer on the wall!");
// }

// beerWall(100);
// f;
// for (i = 99; i >= 0; i--) {

//   if (i > 0) {
//     console.log(
//       i +
//         " bottles of beer on the wall! " +
//         i +
//         " bottles of beer! Take one down, pass it around... " +
//         --i +
//         " bottles of beer on the wall!"
//     );
//     i++;
//   }
// }

function bottles(num) {
  for (i = 0; i <= num; num--) {
    if (num > 0) {
      console.log(
        num +
          " bottles of beer on the wall! " +
          num +
          " bottles of beer! Take one down, pass it around... " +
          --num +
          " bottles of beer on the wall!"
      );
      num++;
    }
  }
}

function bottles(num) {
  for (i = 0; i <= num; num--) {
    if (num > 0) {
      console.log(num + +num + +--num);
      num++;
    }
  }
}

function name(params) {}

bottles(99);
