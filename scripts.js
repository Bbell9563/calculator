var numb1 = 0
var numb2 = 0
var solution = 0
var operator = ""
var inputAccumulator = ""

function getNumberInput(number){
  inputAccumulator += `${number}`
}

function turnNumberToFloat(numb){
  if(numb == "numb1"){
    numb1 = parseFloat(inputAccumulator)
    inputAccumulator = ""}
  else {
    numb2 = parseFloat(inputAccumulator)
    inputAccumulator = ""}
}

function doEquation(operator, numb1, numb2){
  if(operator == "add"){solution = numb1 + numb2}
  else if(operator == "subtract"){solution = numb1 - numb2}
  else if(operator == "multiply"){solution = numb1 * numb2}
  else {solution = numb1/numb2}
}

function clearMath(){
  numb1 = 0
  numb2 = 0
  solution = 0
  operator = ""
}

var btn1 = document.getElementById('1')
var btn2 = document.getElementById("2")
var btn3 = document.getElementById("3")
var btn4 = document.getElementById("4")
var btn5 = document.getElementById("5")
var btn6 = document.getElementById("6")
var btn7 = document.getElementById("7")
var btn8 = document.getElementById("8")
var btn9 = document.getElementById("9")
var btn0 = document.getElementById("0")
var btnPlus = document.getElementById("plus")
var btnMinus = document.getElementById("minus")
var btnTimes = document.getElementById("times")
var btnDivision = document.getElementById("division")
var btnEquals = document.getElementById("equals")
var btnPeriod = document.getElementById("period")
var screen = document.getElementById("screen")


btn1.addEventListener("click", function(){listNumberOnScreen("1")});
btn2.addEventListener("click", function(){listNumberOnScreen("2")});
btn3.addEventListener("click", function(){listNumberOnScreen("3")});
btn4.addEventListener("click",function(){listNumberOnScreen("4")});
btn5.addEventListener("click", function(){listNumberOnScreen("5")});
btn6.addEventListener("click", function(){listNumberOnScreen("6")});
btn7.addEventListener("click", function(){listNumberOnScreen("7")});
btn8.addEventListener("click", function(){listNumberOnScreen("8")});
btn9.addEventListener("click", function(){listNumberOnScreen("9")});
btn0.addEventListener("click", function(){listNumberOnScreen("0")});
btnPlus.addEventListener("click", function(){operatorClicked("add")});
btnMinus.addEventListener("click",function(){operatorClicked("subtract")});
btnDivision.addEventListener("click",function(){operatorClicked("divide")});
btnEquals.addEventListener("click",function(){operatorClicked("equal")});
btnPeriod.addEventListener("click",function(){listNumberOnScreen(".")});
btnTimes.addEventListener("click",function(){operatorClicked("multiply")});


function listNumberOnScreen(char){
  inputAccumulator += char
  screen.innerHTML = `${inputAccumulator}`
}

function operatorClicked(sign){
  if(numb1 == 0){
    turnNumberToFloat("numb1")
    screen.innerHTML = ""
    operator += sign 
  }
  else if(! numb1 == 0){
    turnNumberToFloat("2")
    doEquation(operator,numb1, numb2)
    screen.innerHTML = `=${solution.toFixed(4)}`
    clearMath()
  }
}
