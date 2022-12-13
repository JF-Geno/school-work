const fs = require("fs");
try {
  data = fs.readFileSync(
    "C:\\Users\\obond\\Desktop\\CW.TDay\\Jtest\\input.txt",
    "utf8"
  );
} catch (err) {
  console.error(err);
}
const inputs = data.split("\n");
console.log(inputs);

const arr = [inputs];

console.log(arr);

// let

// function name(params) {
