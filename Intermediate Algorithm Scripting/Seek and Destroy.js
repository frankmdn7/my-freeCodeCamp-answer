function destroyer(arr) {
  let args= Array.prototype.slice.call(arguments);
  return args[0].filter(el=> args.indexOf(el)===-1);   
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
