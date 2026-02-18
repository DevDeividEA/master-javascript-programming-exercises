function getAllLetters(str) {
    // your code here
    if (str.length === 0) return 0

    let result = [...str]

    return result
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
