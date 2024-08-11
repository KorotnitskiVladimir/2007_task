const cont = document.querySelector(".block");

document.addEventListener("mousedown", (event) => {
    if(event.button === 0){
        let x = event.pageX;
        let y = event.pageY;
        cont.style.top = y + "px";
        cont.style.left = x + "px";
    }
})