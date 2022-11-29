// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min)) + min;
// }
// let x = getRandomInt(1, 10);
// console.log(x);
// let guess = parseInt(prompt());
// while (x) {
//   let numTries = 0;
//   console.log("I'm thinking of a number between 1 and 10!");
//   console.log("You guessed ", guess, ".");
//   if (guess !== x) {
//     console.log("Sorry, that's wrong. Try again.");
//     guess = parseInt(prompt());
//     numTries++;
//   } else if (guess == x) {
//     console.log("You guessed ", guess, ".");
//     console.log("You got it!");
//     console.log("The secret number ", x, ".");
//     console.log("It only took you ", numTries, "guesses.");
//     x = false;
//   }
// }

///////////////////////////////////////////////////////////
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
let x2 = getRandomInt(1, 100);
console.log(x2);
let guess1 = parseInt(prompt());
let numTries1 = 7;
while (x2) {
  console.log("I'm thinking of a number between 1 and 100!");
  if (guess1 !== x2 && guess1 < x2) {
    console.log("You guessed ", guess1, ".");
    console.log(
      guess1,
      "is too low. Guess again, you have",
      numTries1,
      "guesses remaining."
    );
    guess1 = parseInt(prompt());
    numTries1--;
  } else if (guess1 !== x2 && guess1 > x2) {
    console.log("You guessed ", guess1, ".");
    console.log(
      guess1,
      "is too high. Guess again, you have",
      numTries1,
      "guesses remaining."
    );
    guess1 = parseInt(prompt());
    numTries1--;
  } else if (guess1 == x2) {
    console.log("You guessed ", guess1, ".");
    console.log("You got it!");
    console.log("The secret number ", x2, ".");
    console.log("It only took you ", numTries1, "guesses.");
    x2 = false;
  }

  if (numTries1 <= 0) {
    x2 = false;
    alert("You Failed Good Day!");
  }
}
