let theme = 1;
function checkProgress() {
  theme++;
  switchColor();
}

function switchColor() {
  const container = document.getElementById("container");
  const panel = document.getElementById("panel");
  const checkbox = document.getElementById("checkbox");
  const svgCircle = document.getElementById("svgCircle");
  const circle = document.getElementById("circle");
  const screen = document.getElementById("screen");
  const val = document.getElementById("val");
  const buttons = document.getElementById("buttons");
  const insert = document.getElementsByClassName(
    "container__calculator__buttons__grid__insert"
  );
  const reset = document.getElementsByClassName(
    "container__calculator__buttons__grid__reset"
  );
  const calculate = document.getElementById("calculate");
  const link = document.getElementById("link");

  console.log(container);

  container.style.backgroundColor = "hsl(222, 26%, 31%)";
  panel.style.color = "white";
  checkbox.style.backgroundColor = "hsl(224, 36%, 15%)";
  checkbox.style.justifyContent = "left";
  svgCircle.style.margin = "3%";
  circle.style.color = "white";

  screen.style.backgroundColor = "hsl(224, 36%, 15%)";
  val.style.color = "white";
  buttons.style.backgroundColor = "hsl(223, 31%, 20%)";
  for (const insertElement of insert) {
    insertElement.style.color = "hsl(221, 14%, 31%)";
    insertElement.style.backgroundColor = "hsl(30, 25%, 89%)";
    insertElement.style.borderColor = "hsl(28, 16%, 65%)";
  }
  for (const resetElement of reset) {
    resetElement.style.color = "white";
    resetElement.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetElement.style.borderColor = "hsl(224, 28%, 35%)";
  }
  calculate.style.color = "white";
  calculate.style.backgroundColor = "hsl(6, 63%, 50%)";
  calculate.style.borderColor = "hsl(6, 70%, 34%)";
  link.style.color = "white";

  if (theme == 2) {
    container.style.backgroundColor = "hsl(0, 0%, 90%)";
    panel.style.color = "hsl(60, 10%, 19%)";
    checkbox.style.backgroundColor = "hsl(0, 5%, 81%)";
    checkbox.style.justifyContent = "center";
    svgCircle.style.margin = "0";
    circle.style.color = "hsl(25, 98%, 40%)";
    screen.style.backgroundColor = "hsl(0, 0%, 93%)";
    val.style.color = "hsl(60, 10%, 19%)";
    buttons.style.backgroundColor = "hsl(0, 5%, 81%)";
    for (const insertElement of insert) {
      insertElement.style.color = "hsl(60, 10%, 19%)";
      insertElement.style.backgroundColor = "hsl(30, 25%, 89%)";
      insertElement.style.borderColor = "hsl(28, 16%, 65%)";
    }
    for (const resetElement of reset) {
      resetElement.style.color = "white";
      resetElement.style.backgroundColor = "hsl(185, 42%, 37%)";
      resetElement.style.borderColor = "hsl(185, 58%, 25%)";
    }
    calculate.style.color = "white";
    calculate.style.backgroundColor = "hsl(25, 98%, 40%)";
    calculate.style.borderColor = "hsl(25, 99%, 27%)";
    link.style.color = "hsl(25, 98%, 40%)";
  } else if (theme == 3) {
    container.style.backgroundColor = " hsl(268, 75%, 9%)";
    panel.style.color = "hsl(52, 100%, 62%)";
    checkbox.style.backgroundColor = "hsl(268, 71%, 12%)";
    checkbox.style.justifyContent = "right";
    svgCircle.style.margin = "3%";
    circle.style.color = "hsl(176, 100%, 44%)";
    screen.style.backgroundColor = "hsl(268, 71%, 12%)";
    val.style.color = "hsl(52, 100%, 62%)";
    buttons.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (const insertElement of insert) {
      insertElement.style.color = "hsl(52, 100%, 62%)";
      insertElement.style.backgroundColor = " hsl(268, 47%, 21%)";
      insertElement.style.borderColor = "hsl(290, 70%, 36%)";
    }
    for (const resetElement of reset) {
      resetElement.style.color = "white";
      resetElement.style.backgroundColor = " hsl(268, 47%, 21%)";
      resetElement.style.borderColor = "hsl(290, 70%, 36%)";
    }
    calculate.style.color = " hsl(198, 20%, 13%)";
    calculate.style.backgroundColor = "hsl(176, 100%, 44%)";
    calculate.style.borderColor = "hsl(177, 92%, 70%)";
    link.style.color = "hsl(176, 100%, 44%)";
  } else {
    theme = 1;
  }
  console.log("theme is:", theme);
}
