let x = prompt("Введите число")         //ввод значений
let n = prompt("Введите степень числа") 
const res = (x, n) => {                 //задание функции
    const result = x**n;                //возведение в степнь
    alert("Ответ " + result)
}
res(x,n)