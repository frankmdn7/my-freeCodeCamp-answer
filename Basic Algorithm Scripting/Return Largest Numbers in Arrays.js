function largestOfFour(arr) {
  let ans=[];
  for (let i=0; i<arr.length; i++){
    let highest=arr[i][0];
    for (let j=1; j<arr[i].length; j++){
      if (highest<arr[i][j]) { highest= arr[i][j];}
    }
    ans.push(highest);
  }
  return ans;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
