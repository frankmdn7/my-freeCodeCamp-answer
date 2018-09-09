function Dog(name) {
  this.name = name;
}

// Add your code below this line
let candidate = new Dog("frank");
 let joinDogFraternity = (candidate) =>(candidate.constructor===Dog) ? true:false; 

