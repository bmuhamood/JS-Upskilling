function frankenSplice(arr1, arr2, index){
  let result = arr2.slice();
  result.splice(index, 0, ...arr1);
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 'a'], 1));