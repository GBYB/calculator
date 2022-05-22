let expression = "0";
let input = "0";
let numArr = ["0"];

function num(id) {
  //get input
  let number = document.getElementById(id).innerText;
  let valid = true;

  //make a negative number
  if (
    (number == "-" && numArr[0] == 0 && numArr.length == 1) ||
    (number == "-" && numArr.length == 0)
  ) {
    console.log("hello");

    input = number;
    numArr = ["-"];
  }
  // switch the default 0 value by a new value
  else if (
    (Number.isInteger(parseFloat(number)) &&
      numArr[0] == 0 &&
      numArr.length == 1) ||
    (Number.isInteger(parseFloat(number)) && numArr.length == 0)
  ) {
    console.log("goodbye");
    input = number;
    numArr = [number];
    // if (numArr[0] == "-" && numArr[1] == "0") {
    //   console.log("yellow");
    // }
    // if (
    //   number != "0" &&
    //   numArr[1] == 0 &&
    //   numArr[0] == "-" &&
    //   numArr.length == 2
    // ) {
    //   input += number;
    //   numArr.push(number);
    // } else {
    //   numArr[1] = number;
    // }
  } else {
    // add number if the first value is set to a value
    // if (Number.isInteger(parseFloat(number)) && numArr[numArr.length - 1] > 0) {
    if (Number.isInteger(parseFloat(number)) && numArr.length > 0) {
      console.log("goodbye");

      input += number;
      numArr.push(number);
    } // add number if the first value is set to -
    else if (
      Number.isInteger(parseFloat(number)) &&
      numArr[numArr.length - 1] == "-"
    ) {
      console.log("goodbye");

      input += number;
      numArr.push(number);
    } // add dot if the number isnt a decimal]
    else if (
      number == "." &&
      Number.isInteger(parseFloat(numArr[numArr.length - 1]))
    ) {
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
    // add decimal number
    else if (
      numArr[numArr.length - 1] == "." &&
      Number.isInteger(parseFloat(number))
    ) {
      input += number;
      numArr.push(number);
    }
    // make expression
    if (
      (number == "+" || number == "-" || number == "x" || number == "/") &&
      numArr[numArr.length - 1] != "." &&
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
            expression = expression.substring(0, i) + "+";
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
          } else {
            expression += input + "=" + res;
            input = res;
          }
        } else {
          let res = eval(multi + input);
          expression += input + "=" + res;
          input = res;
        }
      }

      document.getElementById("exp").innerHTML = expression;
      document.getElementById("val").innerHTML = input;
    }
  }
}
