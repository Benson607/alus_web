function logout() {
    fetch("https://alus.us.kg/api/logout", {
        method: "POST"
    });
    window.location.href = "/index.html";
}

function cancel_logout() {
    document.getElementById("logout_dialog").remove();
    document.getElementById("mask").remove();
}

document.addEventListener("DOMContentLoaded", () => {
    var logout_button = document.getElementById("logout_button");
    logout_button.addEventListener("load", () => {
        logout_button.addEventListener("click", () => {
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
        });
    });
});