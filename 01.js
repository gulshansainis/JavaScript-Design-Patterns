// class in es5
function Car(model) {
  this.model = model;
  this.color = "silver";
  this.year = "2012";

  // public function
  this.printDetails = function() {
    return this.model + spacer() + this.color + spacer() + this.year;
  };

  // private function
  spacer = function() {
    return "      ";
  };
}

Car.prototype.getInfo = function() {
  return this.model + this.spacer() + this.year;
};

var fordCar = new Car("ford");
console.log(fordCar.getInfo());
console.log(fordCar.printDetails());
