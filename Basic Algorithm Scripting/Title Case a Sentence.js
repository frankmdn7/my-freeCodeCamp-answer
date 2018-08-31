function titleCase(str) {

  let arr=str.split(" ");
  for (let i=0;i<arr.length;i++){
  	arr[i]=arr[i][0].toUpperCase()+ arr[i].substring(1).toLowerCase();
  }  
	return arr.join(" ");
}

console.log(titleCase("i'm a little tea pot"));
