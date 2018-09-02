function mutation(arr) {
  let matching=0;
  for (let i=0; i<arr[1].length; i++){
    for (let j=0; j<arr[0].length; j++){
      if (arr[1][i].toLowerCase()===arr[0][j].toLowerCase()) {
        matching++; 
        break;
      } 
    }  
  }
  if (matching===arr[1].length) {return true;}
  else return false;
}

mutation(["hello", "hey"]);
let arr=["hello", "hey"];
console.log(arr[0][2]);
