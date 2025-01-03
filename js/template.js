function logout() {
    fetch("https://alus.us.kg/api/logout", {
        method: "POST"
    })
    .then(data => {
        window.location.href = "/index.html";
    });
}

function cancel_logout() {
    document.getElementById("logout_dialog").remove();
    document.getElementById("mask").remove();
}

function open_logout_dialog() {
    var mask = document.createElement("div");
    mask.id = "mask";
    mask.className = "mask";
    document.body.appendChild(mask);
    var logout_dialog = document.createElement("div");
    logout_dialog.id = "logout_dialog";
    logout_dialog.className = "logout_div";
    logout_dialog.innerHTML = ""
    + "<h1>你確定要登出嗎?</h1>"
    + "</br>"
    + "<button id='yes'>確定</button>"
    + "</br>"
    + "<button id='no'>取消</button>";
    document.body.appendChild(logout_dialog);
    document.getElementById("yes").addEventListener("click", logout);
    document.getElementById("no").addEventListener("click", cancel_logout);
}

document.addEventListener("DOMContentLoaded", () => {
    var wait_rotation = document.createElement("img");
    wait_rotation.src = "/alus_circle.png";
    wait_rotation.className = "rotation";

    const head = document.getElementsByTagName("head")[0];

    document.body.appendChild(wait_rotation);
    
    var title = document.createElement("title");
    title.textContent="alus";
    
    var icon = document.createElement("link");
    icon.rel = "icon";
    icon.sizes="32x32";
    icon.href="/alus_white_square.png";
    icon.type="image/png";

    head.appendChild(title);
    head.appendChild(icon);
    
    const left_list = document.getElementsByClassName("left_list")[0];

    fetch("https://alus.us.kg/api/check_login", {
        method: "POST"
    }).then(response => response.json())
    .then(data => {
        if (data.msg == "logined") {
            left_list.innerHTML = ''
            + "<li>"
            + "<a id='logout_button' class='left_button'>登出</a>"
            + "</li>"
            + "<li>"
            + "<a class='left_button' href='/this_site/index.html'>關於本網站</a>"
            + "</li>";
        }
        else {
            left_list.innerHTML = ''
            + "<li>"
            + "<a class='left_button' href='/signup.html'>註冊</a>"
            + "</li>"
            + "<li>"
            + "<a class='left_button' href='/login.html'>登入</a>"
            + "</li>"
            + "<li style='display: none'>"
            + "<a id='logout_button' class='left_button'>登出</a>"
            + "</li>"
            + "<li>"
            + "<a class='left_button' href='/this_site/index.html'>關於本網站</a>"
            + "</li>";
        }

        document.getElementById("logout_button").addEventListener("click", open_logout_dialog);
    })
    .then(data => {
        wait_rotation.remove();
    })
    .catch(err => console.error(err));
})