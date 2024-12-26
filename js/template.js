document.addEventListener("DOMContentLoaded", () => {
    const head = document.getElementsByTagName("head")[0];
    
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
    .then(data => {/*
        if (data.msg == "logined") {
            left_list.innerHTML = ''
            +'<form action="/this_site/index.html">'
            +    '<button type="submit" id="about_button" class="func_button">關於本網站</button>'
            +'</form>'
            +'<form action="/login.html">'
            +    '<button type="submit" id="to_login_button" class="func_button">登入</button>'
            +'</form>';
        }
        else {
            left_list.innerHTML = ''
            +'<form action="/this_site/index.html">'
            +    '<button type="submit" id="about_button" class="func_button">關於本網站</button>'
            +'</form>'
            +'<form action="/signup.html">'
            +    '<button type="submit" id="to_signup_button" class="func_button">註冊</button>'
            +'</form>'
            +'<form action="/login.html">'
            +    '<button type="submit" id="to_login_button" class="func_button">登入</button>'
            +'</form>';
        }*/
        if (data.msg == "logined") {
            left_list.innerHTML = ''
            + "<li>"
            + "<a href='/this_site/index.html'>關於本網站</a>"
            + "</li>"
            + "<li>"
            + "<a href='/logout.html'>登出</a>"
            + "</li>";
        }
        else {
            left_list.innerHTML = ''
            + "<li>"
            + "<a href='/this_site/index.html'>關於本網站</a>"
            + "</li>"
            + "<li>"
            + "<a href='/signup.html'>註冊</a>"
            + "</li>"
            + "<li>"
            + "<a href='/login.html'>登入</a>"
            + "</li>";
        }
    })
    .catch(err => console.error(err));
})