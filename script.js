
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
const Valgmulighedsknapper = document.getElementById('valgmulighedsknap')
const SvarBox = document.getElementById('svar-box')
const SvarTekst = document.getElementById('svartekst')
const FortsætKnap = document.getElementById('fortsæt-knap')
const Slut = document.getElementById('slut')
const PointTælling = document.getElementById('point-tælling')
const Forkertsvar = document.getElementById('forkertsvar')
const Rigtigtsvar = document.getElementById('rigtigtsvar')
const Vinderlyd = document.getElementById('vinderlyd')
const Taberlyd = document.getElementById('taberlyd')


/* Dernæst påbegynder jeg mine spørgsmål med svarmuligheder*/
 const Spørgsmål = [
  {
    question: 'Anna er på udgik efter sin drømme computer og finder en butik, som sælger den til en meget lav pris',
    options: {'Klikke på "Køb nu" og købe den med det samme':'Undersøge butikken nærmere for at sikre sig, at den er troværdig' }
    ,correctAnswerIndex : 1
  },
  {
    question: 'Anna støder på en online butik med profesionelt design og meget positive anmeldelser',
    options: {'Stole på butikkens troværdighed og foretage købet med det samme':'Undersøge ydligere for at sikre at butikken er troværdig' }
    ,correctAnswerIndex : 1
  },

  {
    question: 'Anna opdager den online butik hun er inde på kræver en anderledes betallingsmetode som gavekort og bankoverførsel istedet for kreditkort og paypal ',
    options: {'Stoppe købet og undersøge yderligere for at undgå svindel': 'Følge den nye betallingsmetode for at undgå svindel' }
    ,correctAnswerIndex : 0
  },

  {
    question: 'Anna skal købe en kjole og hun opdager online butikken ikke har nogle kontaktinformationer ',
    options: {'En butik behøver ikke kontaktinformation, så hun køber bare kjolen': 'Undersøger websitet og tjekker eventuelle anmeldelser for at sikre butikken er troværdig' }
    ,correctAnswerIndex : 1
  } 
]

/* Event og elementer, som skal skjules tilføjes + Spillet startes*/
 StartKnap.addEventListener('click', startQuiz)
    function startQuiz () {
        StartKnap.classList.add('skjult');
        Slut.classList.add('skjult');
        SpørgsmålsBox.classList.remove('skjult');
        showQuestion();
    }

/* Spørgsmål og valgmuligheder tilføjes*/
function showQuestion() {
  const question = question;
  SpørgsmålsTekst.innerText = question.question;
  ValgmulighedsBox.innerHTML = '';
  question.opstions.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('valgmulighedsknap');
      button.addEventListener('click', () => selectAnswer(index));
      ValgmulighedsBox.appendChild(button);
  });
}

