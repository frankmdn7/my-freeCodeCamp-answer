function chunkArrayInGroups(arr, size) {
  // Break it up.
  let ans=[];
  for (let i=0; i<Math.ceil(arr.length/size); i++ ){
    ans[i]=arr.slice(i*size,i*size+size);
  }
  return ans;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));


