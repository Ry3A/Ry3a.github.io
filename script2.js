let str2 = document.getElementById("box123").textContent;
alert(str2 + "!!!");
function truncate(str, maxlength= 50) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
document.getElementById("box123").textContent = truncate(str2);