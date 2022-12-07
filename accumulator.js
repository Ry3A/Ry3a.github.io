/*2. Создайте «корзину» или элемент с похожим 
функционалом для вашего сайта. Создайте функцию-конструктор
 Accumulator(startingValue). Объект, который она создаёт,
  должен уметь следующее:
Хранить «текущее значение» в свойстве value.
Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt 
для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет 
собой сумму всех введённых пользователем значений
, с учётом начального значения startingValue.*/
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(){
            this.value++;
        }
}
function notif() {
    let element = document.getElementById('num');
    notificationNum.read();
    element.innerHTML = notificationNum.value;
}

let startingValue = 0;
var notificationNum = new Accumulator(startingValue);
let element = document.getElementById('num');
element.innerHTML = notificationNum.value;
let time = (setInterval(notif, 3000));
let timeout;
let click = document.getElementById('notification');
click.addEventListener("click",() => {
    clearInterval(time);
    clearTimeout(timeout);
    timeout = setTimeout(()=>{ time = (setInterval(notif, 3000)); }, 10000);
})
