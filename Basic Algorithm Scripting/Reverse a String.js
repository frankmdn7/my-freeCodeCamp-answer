function reverseString(str) {
let arr=[];
for (let i=0; i<str.length; i++) {
  arr[i]=str[str.length-i-1];
}
return arr.join('');
}
reverseString("hello");

