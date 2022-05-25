let expression = "0";
let input = "0";
let numArr = ["0"];

function num(id) {
  //get input
  let number = document.getElementById(id).innerText;
  let valid = true;

  //make a negative number
  if (
    (number == "-" &&
      numArr[0] == 0 &&
      numArr.length == 1 &&
      expression.length <= 1) ||
    (number == "-" && numArr.length == 0 && expression.length <= 1)
  ) {
    input = number;
    numArr = ["-"];
  }
  // switch a negative number to a positive
  else if (
    number == "-" &&
    numArr[0] == "-" &&
    numArr.length == 1 &&
    expression.length <= 1
  ) {
    input = "0";
    numArr = ["0"];
  }
  // switch the default 0 value by a new number
  else if (
    (Number.isInteger(parseFloat(number)) &&
      numArr[0] == 0 &&
      numArr.length == 1) ||
    (Number.isInteger(parseFloat(number)) && numArr.length == 0)
  ) {
    console.log("switch 0");
    input = number;
    numArr = [number];
  } // add number if the first value is set to a value
  else {
    if (
      Number.isInteger(parseFloat(number)) &&
      numArr.length > 0 &&
      numArr[0] != "-"
    ) {
      console.log("add");

      input += number;
      numArr.push(number);
    }
    // add a negative number
    else if (numArr[0] == "-" && Number.isInteger(parseFloat(number))) {
      console.log("negative");

      //get if the negative number is decimal
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] == ".") {
          valid = false;
        }
      }
      //handle if the number is not a decimal
      if (numArr[1] == 0 && numArr[2] != "." && numArr.length == 2) {
        input = "-" + number;
        numArr = ["-" + number];
        console.log("switch");
      }
      // handle decimal number
      else if (valid) {
        input += number;
        numArr.push(number);
        console.log("valid");
      } else {
        input += number;
        numArr.push(number);
        console.log("last");
      }
    }
    // add dot if the number isnt a decimal
    else if (
      number == "." &&
      Number.isInteger(parseFloat(numArr[numArr.length - 1]))
    ) {
      console.log("dotted");
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] == ".") {
          valid = false;
        }
      }
      if (valid) {
        input += number;
        numArr.push(number);
      }
    }
    // // add decimal number
    // else if (
    //   numArr[numArr.length - 1] == "." &&
    //   Number.isInteger(parseFloat(number))
    // ) {
    //   console.log("I am the sand guardian guardian of the sand");
    //   input += number;
    //   numArr.push(number);
    // }
    // make expression
    if (
      (number == "+" || number == "-" || number == "x" || number == "/") &&
      numArr[numArr.length - 1] != "." &&
      numArr[numArr.length - 1] != "-" &&
      expression.charAt(expression.length - 1) != "+" &&
      expression.charAt(expression.length - 1) != "-" &&
      expression.charAt(expression.length - 1) != "x" &&
      expression.charAt(expression.length - 1) != "/" &&
      expression.length >= 1
    ) {
      console.log("hello world");
      expression = input;
      expression += number;
      numArr = ["0"];
      input = "0";
    }
    //switch the operands + x /
    else if (
      numArr[numArr.length - 1] != "." &&
      (number == "+" || number == "x" || number == "/" || number == "-")
    ) {
      console.log("please control");
      expression = expression.replace("+", number);
      expression = expression.replace("/", number);
      expression = expression.replace("x", number);
      for (let i = 0; i < expression.length; i++) {
        if (expression.charAt(i) == "-" && i != 0) {
          expression = expression.substring(0, i) + number;
        }
      }
      // for (let i = 0; i < expression.length; i++) {
      //   if (
      //     expression.charAt(i) == "+" ||
      //     expression.charAt(i) == "x" ||
      //     expression.charAt(i) == "/"
      //   ) {
      //     expression = expression.substring(0, i) + number;
      //   }
      // }
    }
    // switch to the - operand
    // else {
    //   if (number == "-" && (numArr[0] != 0 || numArr.length > 1)) {
    //     expression = expression.replace("+", number);
    //     expression = expression.replace("/", number);
    //     expression = expression.replace("x", number);
    //   }
    // }
    // } else if (
    //   (((number == "+" || number == "x" || number == "/") &&
    //     expression.charAt(expression.length - 1) != number &&
    //     expression.charAt(expression.length - 1) == "+") ||
    //     expression.charAt(expression.length - 1) == "x" ||
    //     expression.charAt(expression.length - 1) == "/") &&
    //   expression.length >= 1
    // ) {
    //   console.log(" i am here");
    //   expression = expression.replace("+", number);
    //   expression = expression.replace("/", number);
    //   expression = expression.replace("x", number);
    // }

    // expression = expression.slice(0, expression.length) + number;
    // }  if (
    //   (((number == "+" || number == "x" || number == "/") &&
    //     expression.charAt(expression.length - 1) != number &&
    //     expression.charAt(expression.length - 1) == "+") ||
    //     expression.charAt(expression.length - 1) == "x" ||
    //     expression.charAt(expression.length - 1) == "/") &&
    //   expression.length >= 1
    // ) {
    //   expression = expression.slice(0, expression.length - 1) + number;
    //   numArr = ["0"];
    //   input = "0";
    // }
  }
  console.log(expression);

  //display input
  document.getElementById("exp").innerHTML = expression;
  document.getElementById("val").innerHTML = input;
  console.log(input);
  console.log(numArr);
}

function del() {
  let calc = true;
  for (let i = 0; i < expression.length; i++) {
    if (expression.charAt(i) == "=") {
      calc = false;
    }
  }
  if (calc) {
    // remove last value added
    if (input.length == 1) {
      input = "0";
      numArr = ["0"];
    } else {
      input = input.slice(0, -1);
      numArr.pop();
    }

    console.log(input);
    console.log(numArr);
    document.getElementById("exp").innerHTML = expression;
    document.getElementById("val").innerHTML = input;
  }
}

function res() {
  // clear console
  input = "0";
  expression = "0";
  numArr = ["0"];
  console.log(input);
  console.log(numArr);
  document.getElementById("exp").innerHTML = expression;
  document.getElementById("val").innerHTML = input;
}

function calc() {
  let calc = true;
  for (let i = 0; i < expression.length; i++) {
    if (expression.charAt(i) == "=") {
      calc = false;
    }
  }

  if (calc) {
    if (
      input.charAt(input.length - 1) != "." &&
      input.charAt(input.length - 1) != "-"
    ) {
      // print the number given if calculated without any operands
      let equation = false;
      for (let i = 0; i < expression.length; i++) {
        if (
          expression.charAt(i) == "+" ||
          expression.charAt(i) == "-" ||
          expression.charAt(i) == "/" ||
          expression.charAt(i) == "x"
        )
          equation = true;
      }
      if (!equation) {
        // if no operand is used
        console.log(input.charAt(0), "hello world fail");
        expression = input;
      } else {
        // if an operand is used
        if (expression.length > 1 && input.charAt(input.length - 1) != ".") {
          console.log("fail");
        }

        let isMulti = false;
        let multi = "";
        for (let i = 0; i < expression.length; i++) {
          if ("x" == expression.charAt(i)) {
            multi +=
              expression.substring(0, i) +
              "*" +
              expression.substring(i + 1, expression.length);
            console.log(expression.substring(0, i));
            console.log(multi);
            console.log(eval(multi + input));
            isMulti = true;
          }

          if ("-" == expression.charAt(i) && "-" == input.charAt(0)) {
            console.log(expression.substring(0, expression.length - 1));
            expression = expression.substring(0, expression.length - 1) + "+";
            input = input.substring(1, input.length);
          }
        }
        console.log(expression);
        if (!isMulti) {
          let res = eval(expression + input);
          console.log(res);
          if (isNaN(res) || res == Infinity || res == -Infinity) {
            res = "invalid expression";
            expression += input + "=" + res;
            input = 0;
            numArr = ["0"];
          } else {
            expression += input + "=" + res;
            input = res;
            numArr = [res];
          }
        } else {
          let res = eval(multi + input);
          expression += input + "=" + res;
          input = res;
          numArr = [res];
        }
      }

      document.getElementById("exp").innerHTML = expression;
      document.getElementById("val").innerHTML = input;
    }
  }
}
