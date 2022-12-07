/*var str;
while(str!="Да"){
    str = prompt("Желаете пройти регистрацию?", "Да");
    alert(str=="Отлично! подтвердите что вы не робот");
    while(!capch()){
        alert("Попробуйте еще раз");
    }
    alert("круто!")

}
str = prompt("Введите логин:");
if(str=="Админ"){
    str = prompt("Введите пароль:");
    if (str=="Я главный"){
        alert("Здравствуйте!");
    }
    else if(str === null){
        alert("Отменено");
    }
    else{
        alert("Неверный пароль");
    }
}
else{
    alert("Я вас не знаю");
}


const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
let like = 0;

function capch(){
let n1 = Math.ceil(Math.random() * 10);
let n2 = Math.ceil(Math.random() * 10);
str1 = prompt(n1 +"+"+ n2);
let res = n1 + n2;
if(str1 == res){
    return true;
}
else{
    return false;
}
}
*/
let like = 0;

//Изменить ID картинки
function pos(e){
    var img=document.getElementById("photo");
    ctx.drawImage(img,e.pageX,e.pageY,25,20);
}
function init2(){
    ctx.clearRect(0, 0, 2000, 1000);
}
function init(){
    if(document.getElementById("label1").style.color==="red"){
        document.getElementById("label1").style.color="rgb(129, 129, 129)";
        removeEventListener('mousemove', pos, false);
        init2();
    }
    else{
        document.getElementById("label1").style.color="red";
        addEventListener('mousemove', pos, false);
        like +=1;
        document.getElementById('like1').innerHTML = like;
    }
}

/*
function sortGreatest(arr) {
    //от наибольшего к наименьшему
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//console.log(sortGreatest([10,9,1000,12,-11,3]));
alert(sortGreatest([10,9,1000,12,-11,3]))
// => [ 1000, 12, 10, 9, 3, -11 ]

function sortLeast(arr) {
    // от наименьшего к наибольшему
    for (let i = arr.length-1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
alert(sortLeast([10,9,1000,12,-11,3]));
// => [ -11, 3, 9, 10, 12, 1000 ]

let arr2 = [56, 73, 92, 9, 15, 6, 8, 12];
arr2 = arr2.filter(item=> item > 10 && item < 70);
alert(arr2);
*/