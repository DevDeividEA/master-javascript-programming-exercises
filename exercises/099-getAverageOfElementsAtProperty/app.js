function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || Array.isArray(obj[key]) || obj[key].length == 0) {
    return []
  }

  let arr = []

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] % 2 == 1) {
      arr.push(obj[key][i])
    }
  }
  return arr
}