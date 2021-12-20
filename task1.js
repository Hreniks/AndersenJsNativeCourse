const solution = document.querySelector('.calc-solution');
const operatorText = document.querySelector('.calc-operator');
const buttons = document.querySelectorAll('.calc-button');
let number1 = '';
let number2 = '';
let result = '';
let isOperationClicked = false;
let operator = '';

function clear() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('lock');
    }

    solution.textContent = '';
    operatorText.textContent = '';
    isOperationClicked = false;
    number1 = '';
    number2 = '';
    result = '';
    isOperationClicked = false;
    operator = '';
}

var countDecimals = function (value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

function addNumber(number) {

    if (!isOperationClicked) {
        if (number === '.' && number1.includes('.')) return;
        number1 += number;
        result = number1;

    }
    if (isOperationClicked) {
        if (number === '.' && number2.includes('.')) return;
        number2 += number;

    }
}

function lock() {
    if (solution.textContent == 'Error') {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent !== 'AC') buttons[i].classList.add('lock');
        }
    };

}


function compute() {
    if (number1 !== '' && number2 !== '') {
        switch (operator) {
            case '+':
                result = +number1 + +number2;
                number1 = result.toString();
                number2 = '';
                break;
            case '-':
                result = +number1 - +number2;
                number1 = result.toString();
                number2 = '';
                break;
            case 'x':
                result = +number1 * +number2;
                number1 = result.toString();
                number2 = '';
                break;
            case '÷':
                if (number2 == 0) {
                    solution.textContent = 'Error';
                    operatorText.textContent = '';
                    lock();
                }
                else {
                    result = number1 / number2;

                    let remainder = Math.round((+result).toFixed(10).toString().slice(10) / 10);

                    result = countDecimals(+result) > 8 ? (+result).toFixed(8) + remainder : +(result);
                    number1 = result.toString();
                    number2 = '';
                }
                break;

            default:
                break;
        }
    }


    if (event.target.textContent == '√' && number1 !== '') {
        result = Math.sqrt(number1);
        number1 = result.toString();
        number2 = '';
        solution.textContent = result;
        operatorText.textContent = '';

    }

    if (event.target.textContent == '𝓍²' && number1 !== '') {
        result = Math.pow(number1, 2);
        number1 = result.toString();
        number2 = '';
        operatorText.textContent = '';
        solution.textContent = result;

    }
}


document.body.addEventListener('click', function (event) {
    let target = event.target;

    if (target.textContent == '+/-') {
        if (!isOperationClicked) {
            number1 = -number1;
            result = number1;
            solution.textContent = result;
        }
        if (isOperationClicked) {
            number2 = -number2;
            solution.textContent = result;
        }
    }



    if (target.classList.contains('calc-button-digit')) {
        addNumber(target.textContent);
        if (!isOperationClicked) solution.textContent = number1;
        if (isOperationClicked) solution.textContent = number2;
    }


    if (target.classList.contains('calc-button-operand')) {
        isOperationClicked = true;

        solution.textContent = '';

        compute();
        operator = target.textContent;
        if (operator !== '√' && operator !== '𝓍²') operatorText.textContent = result + operator;
    }

    if (target.textContent == 'AC') clear();


    if (target.textContent == '=') {
        compute();
        operatorText.textContent = '';
        solution.textContent = result;
    }

    console.log('number1:', number1);

    console.log('number2:', number2);
    console.log('result: ', result);
    console.log('operator', operator);


    // console.log('b: ', b);
    // console.log('bufer: ', bufer);
    // // console.log('isOperationClicked', isOperationClicked);

    // console.log('----------------------------------------------');
});