// object literals
const myModule = {
  // private variable
  myVariable: "I am local variable",

  // private function
  myFunction: function() {
    console.log("Local variable ->> " + this.myVariable);
  }
};

myModule.myFunction();
