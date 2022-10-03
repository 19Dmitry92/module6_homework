let znach = prompt('Введите число от 0 до 1000 ')
znach = +znach                                         
let prov = true
function Prost(num){                                   
    for(let i=2; i<=num/2; i++){                       //параметры проверки на простое число
        if(num%i==0){
            prov=false
            break
        }
    } if(prov==true){
        return alert(`Число ${num} простое`)          //выводы в зависимости от значения prov
    } else{
        return alert(`Число ${num} не простое`)
    } 
} if(znach > 1000){                                    //ограничение ввода
    alert('Введены неверные данные')
} else{
    Prost(znach)
}