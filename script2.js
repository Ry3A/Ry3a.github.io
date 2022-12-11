function truncate(str, maxlength= 50) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
let str2 = document.getElementById("box123").textContent;
let str3 = str2;
document.getElementById("box123").textContent = truncate(str2);


var card = document.getElementById("card1");
card.addEventListener("mouseover", function a() {
    document.getElementById("box123").textContent = str3;
})




let str4 = document.getElementById("box122").textContent;
let str5 = str4;
document.getElementById("box122").textContent = truncate(str4);

var card2 = document.getElementById("card2");
card2.addEventListener("mouseover", function b() {
    document.getElementById("box122").textContent = str5;
})



let str6 = document.getElementById("box133").textContent;
let str7 = str6;
document.getElementById("box133").textContent = truncate(str6);

var card3 = document.getElementById("card3");
card3.addEventListener("mouseover", function c() {
    document.getElementById("box133").textContent = str7;
})
