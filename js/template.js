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
    console.log("finish");
})