let cont = document.querySelector("#change");
let colors = document.querySelectorAll(".content");
colors.forEach(element => {
    element.onmousemove = function() {
        cont.style.backgroundColor = element.style.backgroundColor};  
    element.onmouseout = function() {
        cont.style.backgroundColor = "grey"};
});


// let red = document.querySelector("#red");
// let yellow = document.querySelector("#yellow");
// let green = document.querySelector("#green");
// red.onmousemove = function(){
//     cont.style.backgroundColor = red.style.backgroundColor;
// }
// red.onmouseout = function() {cont.style.backgroundColor = "grey"}
// yellow.onmousemove = function(){
//     cont.style.backgroundColor = yellow.style.backgroundColor;
// }
// yellow.onmouseout = function() {cont.style.backgroundColor = "grey"}
// green.onmousemove = function(){
//     cont.style.backgroundColor = green.style.backgroundColor;
// }
// green.onmouseout = function() {cont.style.backgroundColor = "grey"}
