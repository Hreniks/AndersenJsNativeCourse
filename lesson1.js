let first = prompt("Введите первое значение: ").trim();
let second = prompt("Введите второе значение: ").trim();
first = parseInt(first);
second = parseInt(second);

(!isNaN(first) && !isNaN(second) && (second > 0)) ? console.log(first.toString(second)) : console.log('Некорректный ввод!');




const secondTask = () => {

    const firstNumber = prompt("Введите первое значение: ").trim();
    
    if (isNaN(Number(firstNumber)) || firstNumber.length === 0) {
        return console.log('Некорректный ввод');

    }

    const secondNumber = prompt("Введите второе значение: ").trim();

    if (isNaN(Number(secondNumber)) || secondNumber.length === 0) {
        return console.log('Некорректный ввод');
    }
    else {
        return console.log(+firstNumber + +secondNumber + ',', +firstNumber / +secondNumber + '.');
    }
}

secondTask();