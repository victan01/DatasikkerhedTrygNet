
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
const returnBtn = document.getElementById('tilbage-knap')
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
    ,options: ['1. Klikke på "Køb nu" og købe den med det samme','2. Undersøge butikken nærmere for at sikre sig, at den er troværdig' ],
    correctAnswerIndex : 1
  },
  {
    question: 'Anna støder på en online butik med profesionelt design og meget positive anmeldelser',
    options: ['1. Stole på butikkens troværdighed og foretage købet med det samme','2. Undersøge ydligere i anmeldelser for at sikre at butikken er troværdig' ]
    ,correctAnswerIndex : 1
  },

  {
    question: 'Anna er inde på et website, som kræver betalling via gavekort og bankoverførsel uden kreditkort',
    options: ['1. Stoppe købet og undersøge yderligere for at undgå svindel','1. Følge den nye betalingsmetode for at undgå svindel' ]
    ,correctAnswerIndex : 0
  },

  {
    question: 'Anna skal købe en kjole og hun opdager online butikken ikke har nogle kontaktinformationer, eller kundeservicechat',
    options: ['1. En butik behøver ikke kontakt information, så hun køber bare kjolen', '2. Undersøger websitet og tjekker eventuelle anmeldelser for at sikre butikken er troværdig']
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
        continueBtn.classList.remove('skjult')
        document.querySelector('.Sikkerhedspil-box').classList.add('quiz-started');
      }



/* Spørgsmål og valgmuligheder tilføjes*/
function showQuestion() {
  continueBtn.classList.remove('skjult')
  returnBtn.classList.remove('skjult');
  const intro = document.getElementById('introduktion');
  intro.classList.add('skjult');
  const question = questions[currentQuestionIndex];
  questionText.innerText = question.question;
  optionContainer.innerHTML = '';

  switch (currentQuestionIndex) {
   case 0:
      questionContainer.style.backgroundImage = "url('Img/Img4Game/Question 1.png')";
      questionContainer.style.backgroundSize = "60%";
      questionContainer.style.backgroundRepeat = "no-repeat"; 
      questionContainer.style.backgroundPosition = "top center";
      break;
   case 1:
      questionContainer.style.backgroundImage = "url('Img/Img4Game/Question 2.png')";
      questionContainer.style.backgroundSize = "60%";
      questionContainer.style.backgroundRepeat = "no-repeat"; 
      questionContainer.style.backgroundPosition = "top center";
      break;
   case 2:
        questionContainer.style.backgroundImage = "url('Img/Img4Game/Question 3.png')";
        questionContainer.style.backgroundSize = "50%";
        questionContainer.style.backgroundRepeat = "no-repeat"; 
        questionContainer.style.backgroundPosition = "top center";
        break;
   case 3:
        questionContainer.style.backgroundImage = "url('Img/Img4Game/Question 4.png')";
        questionContainer.style.backgroundSize = "60%";
        questionContainer.style.backgroundRepeat = "no-repeat"; 
        questionContainer.style.backgroundPosition = "top center";
        break;
  }

  

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
        resultText.innerText = 'Korrekt! Godt klaret!';
        Rigtigtsvar.play();
        handleCorrectConsequence(selectedIndex);
    } else {
        resultText.innerText = 'Forkert! Prøv igen.';
        Forkertsvar.play();
        handleIncorrectConsequence(selectedIndex);
    }
    showResult();

}

  function handleCorrectConsequence(selectedIndex) {
    switch (currentQuestionIndex){
      case 0:
          resultText.innerText = 'Godt klaret, du er godt på vej!';
          break;
      case 1:
          resultText.innerText = 'Fantastisk, du er godt kørende!';
          break;
      case 2:
          resultText.innerText = 'Det er altid vigtigt at sikre en sikker betaling. Godt klaret!';
          break;
      case 3:
          resultText.innerText = 'Det er rigtigt! du har godt styr på det!';
          break;
    }
  }

  function handleIncorrectConsequence(selectedIndex) {
    switch (currentQuestionIndex){
      case 0:
          resultText.innerText = 'FORKERT! du skal altid undersøge et nyt website.';
          break;

      case 1:
          resultText.innerText = 'Beklager, du skal være mere forsigtig.';
          break;

      case 2:
          resultText.innerText = 'Sørg for websitetet altid benytter standard betallingsmetoder. ';
          break;

      case 3:
          resultText.innerText = 'Alle troværdige websites skal have kontaktinformationer!';
          break;
    }
  }




 function showResult() {
  resultContainer.classList.remove('skjult')
  questionContainer.classList.add('skjult')
  finalScore.innerText = 'Score: ' + score;
  if (currentQuestionIndex === questions.length - 1) {
    continueBtn.innerText = "Afslut quiz";
    }
    continueBtn.classList.remove('skjult');
  }
 
  returnBtn.addEventListener('click', () => {
    window.location.href = "sikkerhedspil.html";
});

  continueBtn.addEventListener('click', () => {
     resultContainer.classList.add('skjult');
     questionContainer.classList.remove('skjult');
     currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
      showQuestion();
     }  else {
      endQuiz();
     }
});

  /* afslutning af quiz*/ 
  function endQuiz(){ 
  console.log
  questionContainer.style.display = 'none';
    returnBtn.style.display = 'none';
  questionContainer.classList.add('skjult');
  returnBtn.classList.add('skjult');
  slut.classList.remove('skjult');
  continueBtn.classList.add('skjult');
  restartBtn.classList.remove('skjult');
  resultText.innerText = score === questions.length * 25 ? 'Tillykke du har vundet! og er godt sikret i at handle online.' : 'Desværre du har tabt! og er ikke 100% sikret i at handle online.';
  resultText.classList.remove('skjult');
  resultText.style.position = 'relative'; 
  resultText.style.margin = '20%'; 
  resultText.style.width = '140%'; 
  resultText.style.top = '10px'; 
  resultText.style.left = '20%';
  finalScore.innerText = 'Endelige score: ' + score;
  finalScore.classList.remove('skjult');
  finalScore.style.position = 'absolute';  
  finalScore.style.left = '465px';  
  finalScore.style.bottom = '350px';  




      if(score === questions.length * 25) {
      resultText.innerText = 'Tillykke du har vundet! og er godt sikret i at handle online.';
      winSound.play();
      resultText.classList.remove('skjult');
     }
      else{
        resultText.innerText = 'Desværre du har tabt! og er ikke 100% sikret i at handle online.';
        loseSound.play();
        resultText.classList.remove('skjult');
      }
  }

  restartBtn.addEventListener('click', () => {
    window.location.href = "sikkerhedspil.html";
});


/*foto-carousel*/ 
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.display = "none";
    }
    slides[slideIndex].classList.add("active");
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

document.getElementById("nextBtn").addEventListener("click", function () {
    nextSlide();
});

document.getElementById("prevBtn").addEventListener("click", function () {
    prevSlide();
});

window.onload = function () {
    showSlides();
};
