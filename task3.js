document.addEventListener("contextmenu", (event) => {event.preventDefault();})
document.addEventListener("mousedown", (event) => {
    let arr = document.querySelectorAll("div");
    let el = arr[event.button];
    el.style.top = event.pageY + "px";
    el.style.left = event.pageX + "px";
})