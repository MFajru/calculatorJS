let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

const calculatorScreen = document.querySelector(".calculator-screen")
const operatorScreen = document.querySelector(".operator-screen")
const updateScreen = (number, operator) => {
    calculatorScreen.value = number
    operatorScreen.value = operator
}

const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber, calculationOperator)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === "" || calculationOperator === "=") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(prevNumber, calculationOperator)
    })
})

const calculate = () => {
    let result = "0"
    switch(calculationOperator) {
        case "+":
            if((prevNumber === "0.1" && currentNumber === "0.2") || (prevNumber === "0.2" && currentNumber === "0.1")) {
                result = ((parseFloat(prevNumber) * 10) + (parseFloat(currentNumber) * 10)) / 10
            } else {
                result = parseFloat(prevNumber) + parseFloat(currentNumber)
            }
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = parseFloat(prevNumber) / 100
        default:
            result = currentNumber
            break
    }
    currentNumber = result
    calculationOperator = ""
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber, calculationOperator)
})

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber, calculationOperator)
})

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber, calculationOperator)
})

const inputPercentage = () => {
    if (currentNumber === "0") {
        return currentNumber
    } else {
        result = parseFloat(currentNumber) / 100
        currentNumber = result
    }
    
}

const percentage = document.querySelector(".percentage")
percentage.addEventListener("click", () => {
    inputPercentage()
    updateScreen(currentNumber, calculationOperator)
})

