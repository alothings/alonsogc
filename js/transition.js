document.getElementById("scroll").onclick = function(e) {
var posTop = document.getElementById("slide2").offsetTop;
console.log(posTop)
TweenMax.to(window, 5, {scrollTo:{y:posTop} });
};