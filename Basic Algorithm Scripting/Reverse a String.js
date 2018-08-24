function reverseString(str) {
  let str2="";
  for (let i=0; i<str.length; i++) {
    str2=str2+str[str.length-i-1];
  }
  return str2;
}
reverseString("hello");
