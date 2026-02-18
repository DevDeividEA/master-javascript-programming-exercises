function getElementsAfter(array, n) {
  // your code here

  let resultado = array.slice(n + 1)
  return resultado
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
