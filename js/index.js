var btn = document.getElementById("btn");
var pw = document.getElementById("pw");
var sign = document.getElementById("sign");
var main = document.getElementById("main");
var err = document.getElementById("error");

btn.onclick = function () {
    if (pw.value == "bdp666") {
        sign.style.display = "none";
        main.style.display = "";
    }
    else {
        err.innerHTML = "密码错误！";
    }
}

pw.onclick = function () {
    err.innerHTML = "";
}

window.onload = function () {
    document.body.onselectstart = function () {
        return false;
    }
}
