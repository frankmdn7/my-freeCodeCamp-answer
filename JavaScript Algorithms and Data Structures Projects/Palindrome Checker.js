function palindrome(str) {
  let strInUse= str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(strInUse);
  for (let i=0; i<=strInUse.length/2-1; i++) {
    if (strInUse[i]!= strInUse[strInUse.length-i-1]) { return false;}
  }
  return true;
}

console.log(palindrome("eye"));
