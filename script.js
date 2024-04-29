
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
const startBtn = document.getElementById('start-knap')
const questionContainer = document.getElementById('spørgsmålsbox')
const questionText = document.getElementById('spørgsmålstekst')
const optionContainer = document.getElementById('valgmuligheds-box')
const optionBtn = document.getElementById('valgmulighedsknap')

const resultContainer = document.getElementById('svar-box')
const resultText = document.getElementById('svartekst')
const continueBtn = document.getElementById('fortsæt-knap')
const slut = document.getElementById('slut')
const finalScore = document.getElementById('point-tælling')
const restartBtn = document.getElementById('try-knap')
const Forkertsvar = document.getElementById('forkertsvar')
const Rigtigtsvar = document.getElementById('rigtigtsvar')
const Vinderlyd = document.getElementById('vinderlyd')
const Taberlyd = document.getElementById('taberlyd')

let currentQuestionIndex = 0;
let score = 0;

/* Dernæst påbegynder jeg mine spørgsmål med svarmuligheder*/
 const questions = [
  {
    question: 'Anna er på udgik efter sin drømme computer og finder en butik, som sælger den til en meget lav pris'
    ,options: ['Klikke på "Køb nu" og købe den med det samme','Undersøge butikken nærmere for at sikre sig, at den er troværdig' ],
    correctAnswerIndex : 1
    
  },
  {
    question: 'Anna støder på en online butik med profesionelt design og meget positive anmeldelser',
    options: ['Stole på butikkens troværdighed og foretage købet med det samme','Undersøge ydligere for at sikre at butikken er troværdig' ]
    ,correctAnswerIndex : 1
  },

  {
    question: 'Anna opdager den online butik hun er inde på kræver en anderledes betallingsmetode som gavekort og bankoverførsel istedet for kreditkort og paypal ',
    options: ['Stoppe købet og undersøge yderligere for at undgå svindel','Følge den nye betallingsmetode for at undgå svindel' ]
    ,correctAnswerIndex : 0
  },

  {
    question: 'Anna skal købe en kjole og hun opdager online butikken ikke har nogle kontaktinformationer ',
    opstions: ['En butik behøver ikke kontaktinformation, så hun køber bare kjolen', 'Undersøger websitet og tjekker eventuelle anmeldelser for at sikre butikken er troværdig']
    ,correctAnswerIndex : 1
  } 
]

/* Event og elementer, som skal skjules tilføjes + Spillet startes*/
 startBtn.addEventListener('click', startQuiz);

    function startQuiz () {
        console.log(startBtn);
        startBtn.classList.add('skjult');
        slut.classList.add('skjult');
        questionContainer.classList.remove('skjult');
        showQuestion();
    }

/* Spørgsmål og valgmuligheder tilføjes*/
function showQuestion() {
  const intro = document.getElementById('introduktion');
  intro.classList.add('skjult');
  const question = questions[currentQuestionIndex];
  continueBtn.classList.remove('skjult');
  questionText.innerText = question.question;
  optionContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('valgmulighedsknap');
    button.addEventListener('click', () => selectAnswer(index));
    optionContainer.appendChild(button);
  });
}

/* Valg af svagmulighedsdel + resultat*/ 
  function selectAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswerIndex) {
        score += 25;
        resultText.innerText = 'Korrekt!';
        correctSound.play();
    } else {
        resultText.innerText = 'Forkert!';
        wrongSound.play();
    }
    showResult();
}

 function showResult() {
  resultContainer.classList.remove('skjult');
  questionContainer.classList.add('skjult');
  finalScore.innerText = 'score: ' + score;
  if (currentQuestionIndex === questions.length - 1) {
      continueBtn.classList.add('skjult');
  } else {
      continueBtn.classList.remove('skjult');
  }
}

 continueBtn.addEventListener('click', () => {
  resultContainer.classList.add('skjult');
  questionContainer.classList.add('skjult');
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
  } else {
      endQuiz();
  }
});

  /* afslutning af quiz*/ 

    function endQuiz(){
    questionContainer.classList.add('skjult');
    slut.classList.remove('skjult');
    finalScore.innerText = 'Endelige score: ' + score;
      if(score === questions.length * 25) {
      resultText.innerText = 'Tillykke du har vundet! og er godt sikret i at handle online.';
      winSound.play();
     }
      else{
        resultText.innerText = 'Desværre du har tabt! og er ikke 100% sikret i at handle online.';
        loseSound.play();;
      }
  }
  
  restartBtn.addEventListener('click',()=>{
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  });
