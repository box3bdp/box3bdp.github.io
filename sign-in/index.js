window.onload = function () {
    var oUser = document.getElementsByName("username");
    var oPwd = document.getElementsByName("password");
    var oBtn = document.getElementsByClassName("btn");
    var oText = document.getElementById("text");

    var Members=['build_一只建筑师吖'];

    oBtn.onclick = function () {
        if(Members.includes[oUser.value]&&oPwd.value=="代码岛民主党万岁")
        {
            localStorage.setItem("user", oUser.value);
            alert('s');
        }
        // if (oUser.value != "" && oPwd.value != ""&&oUser.value==localStorage.getItem("user")&&oPwd.value==localStorage.getItem("pwd")) {
        //     localStorage.setItem("user", oUser.value);
        //     localStorage.setItem("pwd", oPwd.value);
        // }
        else {
            oText.innerHTML = "用户名或密码错误！";
        }
    }
}
