function getElementsUpTo(array, n) {
  // your code here
  
  let result = array.slice(0, n) 
  return result
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
