let sidesOnDice = parseInt(prompt());

while (sidesOnDice <= 0 || sidesOnDice == NaN || sidesOnDice == undefined) {
  console.log("Sorry, that's not a valid size value. Please choose a positive");
  alert("Sorry, that's not a valid size value. Please choose a positive");
  sidesOnDice = parseInt(prompt());
}

if (sidesOnDice > 0) {
  console.log("How many sides on your dice?", sidesOnDice);
  console.log("Thanks! Here we go ....");
}

let snakeEyes = true;
let rolledDoubles = 0;
let numberOfRolls = 0;

while (snakeEyes) {
  function getRandomInt1(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
  function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  let die1 = getRandomInt1(1, sidesOnDice);

  let die2 = getRandomInt2(1, sidesOnDice);

  if (die1 == die2) {
    rolledDoubles++;
  }
  numberOfRolls++;
  if (die1 > 1 && die2 > 1) {
    console.log(
      numberOfRolls,
      ".die number 1 is",
      die1,
      "and die number 2 is",
      die2
    );
  } else if (die1 == 1 && die2 == 1) {
    console.log(
      numberOfRolls,
      ".die number 1 is",
      die1,
      "and die number 2 is",
      die2
    );
    console.log(
      "You got snake eyes! Finally! On try number",
      numberOfRolls,
      "!"
    );
    console.log("Along the way you rolled doubles", rolledDoubles, "times");
    snakeEyes = false;
  }
  // let averageRoll1;
  // let averageRoll2;
  // if (die1) {
  //   // return (averageRoll1 = die1 + averageRoll1);
  // }
  // if (die2) {
  //   // return (averageRoll2 = die2 + averageRoll2);
  // }
  // console.log(averageRoll1);
  // let dieAverageRoll1 = averageRoll1 / numberOfRolls;
  // let dieAverageRoll2 = averageRoll2 / numberOfRolls;

  // console.log("The average roll for die #1 was", dieAverageRoll1);
  // console.log("The average roll for die #2 was", dieAverageRoll2);
}
