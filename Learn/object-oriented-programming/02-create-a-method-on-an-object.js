let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs : function () {
    return "This dog has " + dog.numLegs +" legs.";
  }

};

console.log(dog.sayLegs());
