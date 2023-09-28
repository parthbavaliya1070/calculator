let btn = document.querySelectorAll(".btn");
let ip = document.querySelector("input");
let string = ""
btn.forEach(function(dets){

    dets.addEventListener("click",function(){

        if(dets.innerHTML == "="){
             string = eval(string); 
             ip.value = string;
        }
        else if(dets.innerHTML == "AC"){
            string= "";
            ip.value = string;
        }
        else{
        string = string + dets.innerHTML;
        ip.value = string;

        }
    })
})