window.onload = function () {
    var oUser = document.getElementById("name");
    var oPwd = document.getElementById("pw");
    var oBtn = document.getElementById("btn");
    var oText = document.getElementById("error");

    var rightpw = ([][(!![] + [])[!+[] + !+[] + !+[]] + ([][[]] + [])[+!+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (!![] + [])[!+[] + !+[] + !+[]] + (![] + [])[!+[] + !+[] + !+[]]]() + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (+(!+[] + !+[] + [+[]]))[(!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]])[+!+[] + [+[]]] + ([] + [])[([][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]])[+!+[] + [+[]]] + ([][[]] + [])[+!+[]] + (![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([][[]] + [])[+[]] + ([][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]])[+!+[] + [+[]]] + (!![] + [])[+!+[]]][([][[]] + [])[+!+[]] + (![] + [])[+!+[]] + ((+[])[([][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]])[+!+[] + [+[]]] + ([][[]] + [])[+!+[]] + (![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([][[]] + [])[+[]] + ([][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + (![] + [])[!+[] + !+[]] + (![] + [])[+!+[]] + (!![] + [])[+[]]])[+!+[] + [+[]]] + (!![] + [])[+!+[]]] + [])[+!+[] + [+!+[]]] + (!![] + [])[!+[] + !+[] + !+[]]]](!+[] + !+[] + [+!+[]]) + (+[![]] + [+(+!+[] + (!+[] + [])[!+[] + !+[] + !+[]] + [+!+[]] + [+[]] + [+[]] + [+[]])])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[] + !+[]] + ([][(!![] + [])[!+[] + !+[] + !+[]] + ([][[]] + [])[+!+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (!![] + [])[!+[] + !+[] + !+[]] + (![] + [])[!+[] + !+[] + !+[]]]() + [])[!+[] + !+[]];

    var members = [
        "build_%u4E00%u53EA%u5EFA%u7B51%u5E08%u5416",
        "%u4F60%u597D2050",
        "%u4E0D%u6587%u660Eder%u5C9B%u6C11",
        "BCM%u6708%u89C1%u8349"
    ];

    oBtn.onclick = function () {
        console.log();
        if (members.includes(escape(oUser.value))) {    //如果用户名正确
            if (oPwd.value == rightpw) {    //如果密码正确
                localStorage.setItem("user", oUser.value);  //存储用户名
                localStorage.setItem("pwd", oPwd.value);    //存储密码
                localStorage.setItem("lspwd", oPwd.value);  //将本次登陆输入的密码当作lspwd的值，当密码变更时，会根据这个变量来提醒党员关注密码更新动态
                localStorage.setItem("isin", "yes");    //将用户登陆状态标记为已登陆
                window.location = localStorage.getItem("yourpage");     //跳转你一开始想访问的页面！
            }
            else {
                if (localStorage.getItem("isin") == "yes" && oPwd.value != rightpw && oPwd.value == localStorage.getItem("lspwd")) {
                    oText.innerHTML = "密码正确但无法登录的解决方法<br/ >因为成员变更，按照相关规定，管理员需要更改密码。<br/ >请时刻关注密码更新动态！";
                    return;
                }
                else {
                    oText.innerHTML = "密码错误！";
                }
            }
        }
        else {
            oText.innerHTML = "用户名错误！";
        }
    }

    // var code = 'BCM月见草';
    // var en = escape(code);
    // var de = unescape(en);
    // console.log(en, '    ', de)
}
