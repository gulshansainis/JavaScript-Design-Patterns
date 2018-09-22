////////////////////////////////////////////////////////////////////
// ECMAScript 3 compatible - ways to create object in javascript
////////////////////////////////////////////////////////////////////

var objectOne = {};

// or
var objectTwo = Object.create(Object.prototype);

// or
var objectThree = new Object();

// Approach 1 - setting & getting value
objectThree.keyOne = "KeyOneValue";
console.log(objectThree.keyOne); // approach 1 to get value

// Approach 2 - setting & getting value
objectThree["keyTwo"] = "KeyTwoValue";
console.log(objectThree["keyTwo"]); // approach 2 to get value

////////////////////////////////////////////////////////////////////
// ECMAScript 5 compatible - ways to create object in javascript
////////////////////////////////////////////////////////////////////
var objectOneES5 = { age: " 2 hours" };
Object.defineProperty(objectOneES5, "name", {
  value: "My name is objectOneES5",
  writable: false,
  enumerable: false,
  configurable: false
});

console.log("objectOneES5.name " + objectOneES5.name);

// verify we can not overwrite
objectOneES5.name = "My new name is newObjectOneES5";
console.log("objectOneES5.name " + objectOneES5.name);

// verify we can not delete
delete objectOneES5.name;
console.log("objectOneES5.name " + objectOneES5.name);

// verify we can delete other properties
console.log("objectOneES5.name " + objectOneES5.age);
delete objectOneES5.age;
console.log("objectOneES5.name " + objectOneES5.age);
