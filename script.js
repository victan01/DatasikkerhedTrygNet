
/* Menubar*/
const menubtn = document.getElementById("menu-btn")
const sidebar = document.getElementById("sidebar")
const content = document.querySelector("menucontent")

menubtn.addEventListener("click",()=>{
    if(sidebar.style.left === "-250px" || sidebar.style.left === '') {
       sidebar.style.left="0";
       content.style.marginleft = "200px";
    } else{
        sidebar.style.left ="-250px";
        content.style.marginleft= "0";

    }
});

/*Faktakasser (counter)*/
let valueDisplays = document.querySelectorAll(".fakta");
let interval = 1500;


valueDisplays.forEach((valueDisplays)=>{
    let startvalue = 0;
    let endvalue = parseInt(valueDisplays.getAttribute("data-val"));
    console.log(endvalue);
    let duration = Math.floor (interval/endvalue);
    let counter = setInterval(function() {
        startvalue += 1;
        valueDisplays.textContent = startvalue + "%";
        if(startvalue == endvalue) {
            clearInterval(counter)
        }
    }, duration);
});
