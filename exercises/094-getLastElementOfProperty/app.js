// Write your function here
function getLastElementOfProperty(obj, key, n) {
    if (!obj[key] || !Array.isArray(obj[key]) || n >= obj[key].length) {
        return undefined
    }
    return obj[key][obj[key].length - 1]
}