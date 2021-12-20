
function Сalc() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);

  if(isNaN(num1) ==true) num1 = 0;
  if(isNaN(num2) == true) num2 = 0;
  const oper = document.getElementById('operation');
  const selectOperation = oper.options[oper.selectedIndex].value
  const total = document.getElementById("result");

  switch (selectOperation) {
    case '+':
      result = num1 + num2;
      total.textContent = Math.round(result)
    break;
   case '-':
        result = num1 - num2;
        total.textContent = Math.round(result)
    break;
   case '*':
     result = num1 * num2;
     total.textContent = Math.round(result)
    break;
      case '/':
        result = num1 / num2;
        total.textContent = Math.round(result)
  }
}
