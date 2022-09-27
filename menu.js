
     function switchPage(num) {
      if(num == 1) {
       document.getElementById("1").style.display = "shown"
       document.getElementById("2").style.display = "none"
       document.getElementById("3").style.display = "none" 
      } else if(num == 2) {
       document.getElementById("2").style.display = "shown"
       document.getElementById("1").style.display = "none"
       document.getElementById("3").style.display = "none"
      } else if(num == 3) {
       document.getElementById("3").style.display = "shown"
       document.getElementById("2").style.display = "none"
       document.getElementById("1").style.display = "none"
      }
     }
    
