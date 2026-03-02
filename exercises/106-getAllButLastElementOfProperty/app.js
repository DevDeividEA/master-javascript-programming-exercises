function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key])) {
      return []
    }

    let arr = obj[key].slice(0, -1)
    
    return arr
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
