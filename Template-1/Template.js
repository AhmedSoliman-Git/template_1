let x = document.getElementById("sp")
let z = document.getElementById("noen")
document.addEventListener("click",function(e){
    if(e.target===x){
        z.style.display = "block"
        
    }else{
        z.style.display = "none"

    }

})
let date = document.getElementById("divv");
let date2 = new Date().getFullYear();
date.innerHTML=date2