document.addEventListener("DOMContentLoaded", () => {
    const head = document.getElementsByTagName("head")[0];
    
    var title = document.createElement("title");
    title.textContent="alus";
    
    var icon = document.createElement("link");
    icon.rel = "icon";
    icon.sizes="32x20";
    icon.href="/alus_white.png";
    icon.type="image/png";

    head.appendChild(title);
    head.appendChild(icon);
    
    const left_list = document.getElementsByClassName("left_list")[0];
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
})