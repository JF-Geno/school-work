// let year = 2302;
// let job = "doc";
// let city = "island";
// let pets = 2;

// console.log(
//   "In the year",
//   year,
//   ",you will be a",
//   job,
//   ",and working in",
//   city,
//   "with",
//   pets,
//   "pets."
// );

// //////////////////////////////////////////////////////////////////////////////
// let birth = 2006;
// let year1 = 2022;
// let age = year1 - birth;
// console.log("I will be either ", age, " or ", age - 1, " in ", year1);

// ///////////////////////////////////////////////////////////////////////////////

// let currentAge = 16;
// let maximumAge = 150;
// let amountPerDay = 3;

// let maximumAgeInDay = maximumAge * 365;
// let amountForLife = maximumAgeInDay * amountPerDay;
// console.log(
//   "You will need ",
//   amountForLife,
//   "meals to last you until the ripe old age of ",
//   maximumAge,
//   "."
// );
// ////////////////////////////////////////////////////////////////////////////////

// let a = 4;
// let x = 1 + (a *= a++);

// console.log(a, x);

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const yearBorn = inventors.filter(
  (Born) => Born.year >= 1500 && Born.year < 1600
);

console.log(yearBorn);

const names = inventors.map((name) => name.first + " " + name.last);

console.log(names);

const BDay = inventors.sort((a, b) => a.year - b.year);

console.log(BDay);

// const claAge = inventors.filter((lifeTime) => lifeTime.passed - lifeTime.year);

// const age = inventors.sort((a, b) => a.claAge - b.claAge);

// console.log(age);

const allAge = inventors.filter((total, num) => total + num);


console.log(BDay);