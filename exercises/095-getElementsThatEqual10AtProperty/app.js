// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let arr = obj[key]
    let newArr = []

    arr.forEach(element => {
        if (element === 10) {
            newArr.push(element)
        }
    })
    return newArr
}