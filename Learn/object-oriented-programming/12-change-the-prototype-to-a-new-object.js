function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
 numLegs :4,
 eat(){
    console.log("nom nom nom");
 },
 describe() {
    console.log("My name is " + this.name);
 }
};
