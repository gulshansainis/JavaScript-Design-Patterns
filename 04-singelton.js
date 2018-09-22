var mySingleton = (function() {
  var instance;
  var counter = 0;
  var init = function() {
    return {
      incrementCounter: function() {
        counter++;
      },
      decrementCounter: function() {
        counter--;
      },
      printCounter: function() {
        console.log(counter);
      }
    };
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
        console.log("created instance " + instance);
      } else {
        console.log("return existing instance " + instance);
      }

      return instance;
    }
  };
})();

mySingletonInstance = mySingleton.getInstance();
mySingletonInstance.printCounter();

mySingletonInstance.incrementCounter(); //1
mySingletonInstance.printCounter();

mySingletonInstanceNew = mySingleton.getInstance();
mySingletonInstanceNew.printCounter();

mySingletonInstanceNew.incrementCounter(); //2
