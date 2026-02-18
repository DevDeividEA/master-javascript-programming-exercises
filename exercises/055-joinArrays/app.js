function joinArrays(arr1, arr2) {
  // your code here
  let arrys = arr1.concat(arr2)
  return arrys
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
