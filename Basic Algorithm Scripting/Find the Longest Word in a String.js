function findLongestWordLength(str) {
  let arr=str.split(" ");
  let maxlen=0;
  let longest=arr.reduce(function(maxlen,current){
    if (maxlen<current) { return current;}
    else return maxlen; 
  }, "");
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
