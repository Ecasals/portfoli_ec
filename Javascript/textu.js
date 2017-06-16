document.getElementById("in_user_name").onclick = function () {
    this.style.backgroundColor = "rgba(245,245,245,0.8)";
    document.getElementById("info_user").style.color = "black";
    document.getElementById("menu_options_container").style.height = "90%";
    setTimeout(delay2, 1000);
}
document.getElementById("in_close").onclick = function () {
    document.getElementById("menu_options_container").style.height = "0%";
    var elements = document.getElementsByClassName("info_title");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName("info_dec");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = "0px";
    }
    setTimeout(delay, 1000);
}

function delay() {
    document.getElementById("in_user_name").style.backgroundColor = "rgba(245,245,245,0)";
}

function delay2() {
    var elements = document.getElementsByClassName("info_title");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
    var elements = document.getElementsByClassName("info_dec");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = "25px";
    }
}