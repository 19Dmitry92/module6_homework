let furstN = +prompt("Введите начальное число")                 //ввод значений
    secondN = +prompt("Введите конечное число")
let i = furstN-1;                                               //что бы выводилось первое введенное число то - 1                
    function interv(){
        i++
          console.log(i)
    } const out = setInterval(interv, 1000, furstN, secondN)    //задание параметров регулярного таймера
    setTimeout(function(){                                      //остановка + вывод последнего числа
        clearInterval(out)
    }, ((secondN-furstN)+1)*1000 )

