let captain = "Picard";
let commander = "Will";
let ensign = "Wesley";
let android = "Data";
let security = "Worf";
let engineering = "Geordi";

let nameArry = [captain, commander, ensign, android, security, engineering];

console.log(nameArry);
//////////////////////////////////////////////////////////////////////////////

let prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];

prices[1] = 3.5;
prices[3] = 2.55;
prices[7] = 5.45;

console.log(prices);

//////////////////////////////////////////////////////////////////////

let arrayClone = [1, 5, 4, 19];

clone(arrayClone);

function clone(NClone) {
  for (let i = 0; i <= 1; i++) {
    console.log(NClone);
  }
}

///////////////////////////////////////////////////////////////////////

let first = [7, 9, 0, -2];

returnInt(first, 0);

function returnInt(myArr, myInt) {
  console.log(myArr[myInt]);
}
