let trainPos = 10;

// const trainMov = "lllrrrllrlrlrrrlllrlllllllllrrrlrlrlrrlrlllrlrlrlrlrllrlrr";

const trainMov = "rrrrrrrrrr";

infoNum = trainMov.length;

// function letterCheck(infoNum) {
//   for (let i = 0; i <= infoNum; i++) {
//     let sixthLetter = trainMov[i];
//   }
// }

getMov(trainPos, infoNum);

function getMov(trainPos, infoNum) {
  for (let i = 0; i <= infoNum; i++) {
    let numLetter = trainMov[i];
    if (numLetter == "l") {
      ++trainPos;
    }
    if (numLetter == "r") {
      --trainPos;
    }
    if (trainPos == 0) {
      console.log("you did it");
      return i;
    }
  }
  console.log("sorry you failed");
}
