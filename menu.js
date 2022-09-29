var openTab = 1
var x1 = document.getElementById("1")
var x2 = document.getElementById("2")
var x3 = document.getElementById("3")
function pageSwitch(num) {
 openTab = num
}
setInterval(function(){
  if (openTab == 1) {
   x1.style.display = "block"
} else {
   x1.style.display = "none"
}
 if (openTab == 2) {
   x2.style.display = "block"
} else {
   x2.style.display = "none"
}
 if (openTab == 3) {
   x3.style.display = "block"
} else {
   x3.style.display = "none"
 }
}); 
