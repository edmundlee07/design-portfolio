function openTopNav(x) {
    document.getElementById("top-nav").style.height = "70%";
    document.getElementById("container1").style.opacity = "0.2";
    document.getElementById("container1").style.transition = "1s ease-out";
}

function closeTopNav(x) {
    document.getElementById("top-nav").style.height = "0%";
    document.getElementById("container1").style.opacity = "1";
    document.getElementById("container1").style.transition = "1s ease-out";
}