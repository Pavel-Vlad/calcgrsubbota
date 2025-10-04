window.onload = function () {
    let nums = document.querySelectorAll('.num');
    let calc = document.getElementById('calc');
    let isNumber2 = 0;
    let plus = document.getElementById('plus');

    /*console.log(nums);*/

    nums.forEach((el) => {
        el.addEventListener('click', (e) => {
            calc.value = calc.value + e.target.innerText;
        })
    })

    plus.addEventListener('click', (e) => {
        isNumber2 = 1;
    })
}
