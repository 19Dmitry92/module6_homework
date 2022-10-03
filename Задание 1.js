let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(ar)
let evenNum = 0                                                                                 //параметры нулей
let oddNum = 0
let zero = 0
function getArrSum(arfun){                                                                      //проверка на ноль
for (let i = 0; i < arfun.length; ++i) {

    if (arfun[i] === 0) {                      
        zero++
    } else if (typeof arfun[i] === 'number' && !isNaN(arfun[i]) && arfun[i] % 2 === 0) {        //проверка на четность и НАН
        evenNum++
    } else if (typeof arfun[i] === 'number' && !isNaN(arfun[i])) {
        oddNum++
    }
}
console.log(`В массиве четных чисел: ${evenNum} , не четных: ${oddNum}, нулей: ${zero}`)
}
getArrSum(ar)
