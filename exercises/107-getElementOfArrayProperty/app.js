function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if (Array.isArray(obj[key])) {
        return obj[key][index]
    }
    return undefined
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
