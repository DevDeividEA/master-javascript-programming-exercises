// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let a = obj[key]
    let newArr = []

    a.forEach(element => {
        if (element < 100) {
        newArr.push(element)
        }
    });
    return newArr
}