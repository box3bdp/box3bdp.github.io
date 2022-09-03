var btn = document.getElementById("btn");
var pw = document.getElementById("pw");
var sign = document.getElementById("sign");
var main = document.getElementById("main")

btn.onclick = function () {
    if (pw.value == "bdp666") {
        sign.style.display = "none";
        main.style.display = "";
    }
}

window.onload = function () {
    document.body.onselectstart = function () {
        return false;
    }
}
