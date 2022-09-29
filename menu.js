var x;
function pageSwitch(x) {
      if(x == 1) {
       document.getElementById("1").style.display = "shown"
       document.getElementById("2").style.display = "none"
       document.getElementById("3").style.display = "none" 
       console.log(x)
      } else if(x == 2) {
       document.getElementById("2").style.display = "shown"
       document.getElementById("1").style.display = "none"
       document.getElementById("3").style.display = "none"
       console.log(x)
      } else if(x == 3) {
       document.getElementById("3").style.display = "shown"
       document.getElementById("2").style.display = "none"
       document.getElementById("1").style.display = "none"
       console.log(x)
      }
     }
    
