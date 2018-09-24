function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  function checkfn (obj,src){
    const srcProp= Object.keys(src); 
    for (let i=0; i<srcProp.length; i++){
      if (obj[srcProp[i]]!== src[srcProp[i]]) return false;
		}
		return true;
  }
  arr=collection.filter( el => checkfn(el,source)==true);

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
