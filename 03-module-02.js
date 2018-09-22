// module pattern -> object literals + closure
const myModule = (function() {
  // private variable
  let localVar = "I am local variable";

  // private object
  let jsonObject = {};

  function setJsonProperty(key, value) {
    jsonObject[key] = value;
  }

  function getJsonProperty(key) {
    return jsonObject[key];
  }

  // private function
  let localFunc = function() {
    return "Local variable ->> " + localVar;
  };

  return {
    publicVar: localVar,
    publicFunc: localFunc,
    setJsonProperty,
    getJsonProperty
  };
})();

myModule.publicFunc();
myModule.setJsonProperty("myKey", "myValue");
console.log(myModule.getJsonProperty("myKey"));
console.log(myModule.publicVar);
console.log("-------------------");
console.log(myModule.publicFunc());
