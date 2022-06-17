let expression = "0";
function num(id) {
  let number = document.getElementById(id).innerText;
  let valid = true;
  if (number == ".") {
    //check if the the dot can be added
    let deci = parseInt(expression.charAt(expression.length - 1));
    if (!Number.isInteger(deci)) {
      valid = false;
    }
    //check if the dot is preceded by a valid digit
    else {
      for (let i = expression.length; i > 0; i--) {
        if (expression.charAt(i) == ".") {
          valid = false;
          break;
        }
      }
    }
    // add dot
    if (valid) expression += number;
  }
  // add operand to expression
  else if (number == "+" || number == "-" || number == "/" || number == "x") {
    // check if the the operand can be added
    let deci = parseInt(expression.charAt(expression.length - 1));
    if (Number.isInteger(deci) && expression.length < 3) expression += number;
    //change operand last added
    let operand = expression.charAt(expression.length - 1);
    if (operand == "+" || operand == "-" || operand == "/" || operand == "x") {
      // if (operand.localeCompare(number) != 0) {
      console.log("success");
      expression = expression.substring(0, expression.length - 1) + number;
      //}
    }
  }
  // force 0 to be replaced by a digit at the start of the expression
  else if (expression.length == 1 && expression.charAt(0) == 0) {
    expression = number;
  } else {
    // force 0 to be replaced by a digit at the start of number
    if (
      expression.charAt(expression.length - 1) == "0" &&
      (expression.charAt(expression.length - 2) == "+" ||
        expression.charAt(expression.length - 2) == "-" ||
        expression.charAt(expression.length - 2) == "x" ||
        expression.charAt(expression.length - 2) == "/")
    ) {
      expression = expression.substring(0, expression.length - 1) + number;
    }
    // add digit to expression
    else {
      // if (expression.length < 3) expression += number;
      expression += number;
    }
  }
  //display input
  document.getElementById("exp").innerHTML = expression;
  console.log(expression);
}

function del() {
  if (expression.length == 1) {
    expression = "0";
  } else {
    expression = expression.slice(0, -1);
  }
  document.getElementById("exp").innerHTML = expression;
}

function res() {
  console.log("clear");
  expression = "0";
  document.getElementById("exp").innerHTML = expression;
}
