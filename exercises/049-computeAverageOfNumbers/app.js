// Write your function here
function computeAverageOfNumbers(numbers){
    if (numbers.length == 0) return 0;

    let total = 0;

    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }

    let result = total / numbers.length;
    return result;
}

