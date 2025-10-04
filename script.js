window.onload = function () {
    let nums = document.querySelectorAll('.num');
    let math = document.querySelectorAll('.math');
    let calc = document.getElementById('calc');
    let isNumber2 = false;
    let ravno = document.getElementById('ravno');
    let number1 = 0;
    let mathOperation = '';
    let error = false;

    // обработка клика на цифры
    nums.forEach((el) => {
        el.addEventListener('click', (e) => {
            if (error) {
                calc.value = '';
                error = false;
            }
            if (isNumber2) {
                number1 = calc.value;
                calc.value = '';
                isNumber2 = false;
            }
            calc.value = calc.value + e.target.innerText;
        })
    })

    math.forEach((el) => {
        el.addEventListener('click', (e) => {
            isNumber2 = true;
            mathOperation = e.target.innerText;
        })
    })

    ravno.addEventListener('click', (e) => {
        console.log(number1)
        console.log(mathOperation)
        console.log(calc.value)

        if (mathOperation === '+') {
            calc.value = +number1 + +calc.value;
        }
        if (mathOperation === '-') {
            calc.value = +number1 - +calc.value;
        }
        if (mathOperation === '*') {
            calc.value = +number1 * +calc.value;
        }
        if (mathOperation === '/') {
            if (calc.value === '0') {
                calc.value = 'Делить на ноль нельзя!'
                error = true;
            } else {
                calc.value = +number1 / +calc.value;
            }
        }
    })
}

// TODO:
// первым набирается 0 - исправить
// при ошибке ошибка если дальше производить операции
