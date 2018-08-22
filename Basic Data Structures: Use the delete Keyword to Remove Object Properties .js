//Basic Data Structures: Use the delete Keyword to Remove Object Properties
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// change code below this line
 ['oranges','plums','strawberries'].forEach(e => delete foods[e]);
// change code above this line

console.log(foods);
