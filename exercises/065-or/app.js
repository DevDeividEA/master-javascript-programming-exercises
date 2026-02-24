function or(expression1, expression2) {
  // your code here
  if (expression1){
    return expression1
  }

  else{
    return expression2
  }
}

let output = or(true, false);
console.log(output); // --> true;
