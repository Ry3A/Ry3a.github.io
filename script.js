var str;
while(str!="Да"){
    str = prompt("Желаете пройти регистрацию?", "Да");
    alert(str=="Да"?"Круто!":"Попробуй еще раз");
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


const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const ctx = canvas.getContext("2d")



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
    }
}