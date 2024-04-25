
/* Menubar*/
const menubtn = document.getElementById("menu-btn")
const sidebar = document.getElementById("sidebar")
const content = document.querySelector("menucontent")

menubtn.addEventListener("click",()=>{
    if(sidebar.style.display === "none" || sidebar.style.display === '') {
       sidebar.style.display="block";
       content.style.marginleft = "200px";
    } else{
        sidebar.style.display ="none";
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



/*Sikkerhedspillet*/
/* Jeg kalder først på mine ID*/

const StartKnap = document.getElementById('start-knap')
const SpørgsmålsBox = document.getElementById('spørgsmålsbox')
const SpørgsmålsTekst = document.getElementById('spørgsmålstekst')
const ValgmulighedsBox = document.getElementById('valgmuligheds-box')
const Valgmulighedsknapper = document.getElementById('spørgsmålstekst')
const SvarBox = document.getElementById('svar-box')
const SvarTekst = document.getElementById('svartekst')
const FortsætKnap = document.getElementById('fortsæt-knap')
const Slut = document.getElementById('slut')
const PointTælling = document.getElementById('point-tælling')
const Forkertsvar = document.getElementById('forkertsvar')
const Rigtigtsvar = document.getElementById('rigtigtsvar')
const Vinderlyd = document.getElementById('vinderlyd')
const Taberlyd = document.getElementById('taberlyd')