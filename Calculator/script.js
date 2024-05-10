var currentNumber = "";
      var operator = "";
      var result = null;

      function appendNumber(number) {
        currentNumber += number;
        updateDisplay(currentNumber);
      }

      function setOperator(op) {
        operator = op;
        if (result === null) {
          result = parseFloat(currentNumber);
        } else {
          calculateResult();
        }
        currentNumber = "";
      }

      function calculateResult() {
        if (operator === "+") {
          result += parseFloat(currentNumber);
        } else if (operator === "-") {
          result -= parseFloat(currentNumber);
        } else if (operator === "*") {
          result *= parseFloat(currentNumber);
        } else if (operator === "/") {
          result /= parseFloat(currentNumber);
        }
        updateDisplay(result);
        currentNumber = "";
      }

      function clearDisplay() {
        currentNumber = "";
        operator = "";
        result = null;
        updateDisplay("");
      }

      function updateDisplay(value) {
        document.getElementById("display").value = value;
      }