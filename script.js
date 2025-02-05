let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.addEventListener("scroll", function () {
    const messageMain = document.querySelector(".message-main");
    if (window.scrollY > 50) { // Jika sudah scroll lebih dari 50px
        messageMain.classList.add("scrolled");
    } else {
        messageMain.classList.remove("scrolled");
    }
});