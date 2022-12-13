let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert(user[key]); // John (if enter "name")

////////////////////////////////////////////

let user1 = {
  name: "John",
  age: 30,
};

let key1 = "name";
alert(user.key1); // undefined

/////////////////////////////////////

let fruit1 = prompt("Which fruit to buy?", "apple");

let bag1 = {
  [fruit1]: 5, // the name of the property is taken from the variable fruit
};

alert(bag1.apple); // 5 if fruit="apple"

/////////////////////////////

let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};

// take property name from the fruit variable
bag2[fruit2] = 5;

///////////////////////////////////////////////

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

///////////////////////////////////////////////////

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6

///////////////////////////////////////////////////

let obj = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

/////////////////////////////////////////////////
//There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

///////////////////////////////////////////////////

let user = {};

alert(user.noSuchProperty === undefined); // true means "no such property"

///////////////////////////////////////////////////
//There’s also a special operator "in" for that.

//The syntax is:

"key" in object;

//For instance:

let user = { name: "John", age: 30 };

alert("age" in user); // true, user.age exists
alert("blabla" in user); // false, user.blabla doesn't exist

//Please note that on the left side of in there must be a property name. That’s usually a quoted string.

//If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

let user = { age: 30 };

let key = "age";
alert(key in user); // true, property "age" exists

///////////////////////////////////////////////////////

// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

// Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.
// Ordered like an object

// Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

// As an example, let’s consider an object with the phone codes:

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first.

// But if we run the code, we see a totally different picture:

//     USA (1) goes first
//     then Switzerland (41) and so on.

// The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.

///////////////////////////////////////////////////////////

// Integer properties? What’s that?

// The “integer property” term here means a string that can be converted to-and-from an integer without a change.

// So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert(String(Math.trunc(Number("49")))); // "49", same, integer property
alert(String(Math.trunc(Number("+49")))); // "49", not same "+49" ⇒ not integer property
alert(String(Math.trunc(Number("1.2")))); // "1", not same "1.2" ⇒ not integer property

/////////////////////////////////////////////////////////

// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

// Like this:

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}

// Now it works as intended.

////////////////////////////////////////////////////////

// Summary

// Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:

//     Property keys must be strings or symbols (usually strings).
//     Values can be of any type.

// To access a property, we can use:

//     The dot notation: obj.property.
//     Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].

// Additional operators:

//     To delete a property: delete obj.prop.
//     To check if a property with the given key exists: "key" in obj.
//     To iterate over an object: for (let key in obj) loop.

// What we’ve studied in this chapter is called a “plain object”, or just Object.

// There are many other kinds of objects in JavaScript:

//     Array to store ordered data collections,
//     Date to store the information about the date and time,
//     Error to store the information about an error.
//     …And so on.

// They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

// Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.
