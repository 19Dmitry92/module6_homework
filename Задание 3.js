let a = 5
let b = 6
function summ(a, b){             
    return a + b
} function vozvr(a){
    return a
} let result = summ(vozvr(a), b) //ввывод суммы возвращенной функции vozvr (которая а) и просто b
console.log(result)