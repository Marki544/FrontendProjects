const btn = document.getElementById("btn");
const fade = document.getElementById("fade");
const menu = document.getElementById("menu");

function openMenu(){
    btn.src = "images/icon-menu-close.svg";
    btn.classList.add("open");
    fade.style.display = "block";
    menu.style.display = "block";
}

function closeMenu(){
    btn.src = "images/icon-menu.svg";
    btn.classList.remove("open");
    fade.style.display = "none";
    menu.style.display = "none";
}

btn.addEventListener('click', function(){

    if(btn.classList.contains("open")){
        closeMenu();
    }else{
        openMenu();
    }

});