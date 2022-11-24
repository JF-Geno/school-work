function fizzBuzz(num, fizz, buzz) {
  if (num % buzz == 0 && num % fizz == 0) {
    console.log("FizzBuzz");
  } else if (num % buzz == 0) {
    console.log("buzz");
  } else if (num % fizz == 0) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
}

fizzBuzz(30, 3, 5);

function beerWall(num) {
  for (let i = 0; i <= num; num--) {
    if (num % 3 !== 0) {
      console.log(num + "bottles of beer on the wall!");
    }
  }
}

beerWall(100);
