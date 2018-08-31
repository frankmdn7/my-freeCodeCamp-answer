function findLongestWordLength(str) {
  let arr=str.split(" ");
  let longest=arr.reduce(function(longword,current){
    if (longword.length<current.length) { return current;}
    else return longword; 
  }, "");
  return longest.length;
}
 findLongestWordLength("The quick brown fox jumped over the lazy dog");
