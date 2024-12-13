  
  const questions = [
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    },
    {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    },
    {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    },
    {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    },
    ];

  let title = document.getElementById("titleQuestion")
  let contButtons = document.getElementById("contButtons")
  let countQ = document.querySelector(".questionNumber")
  let container = document.getElementById("container")
  let pQuestionNumber = document.getElementById("pQuestionNumber")



  let result = 0
  console.log(result)

  let correntquestion = 0;
  countQ.innerText = correntquestion + "/10"

  function uploadquestion(){
      const titleQuestion = questions[correntquestion];
      title.innerText = titleQuestion.question;

      //vanno svuotati i bottoni
      contButtons.innerText = ""
      const answers = [titleQuestion.correct_answer].concat(titleQuestion.incorrect_answers).sort()

      answers.forEach(answer =>{
          const button = document.createElement("button")
          button.innerText = answer
          button.onclick = ()=>control(answer)
          contButtons.appendChild(button)
      })
          countQ.innerText = correntquestion + "/10"

  }

      function control(clickAnswer){
          const titleQuestion = questions[correntquestion];
          restartTimer()
          if(clickAnswer === titleQuestion.correct_answer){
              result++
          }
          correntquestion++;
          
          
      if(correntquestion < questions.length){
          uploadquestion()

      } else if(correntquestion == questions.length){
            containTimer.style.display = "none"
            clearInterval(timer);
            duration = 0
            timeElement.textContent = "0";

        if(result >= 6){
            totResult()
            title.innerText = "Exam Passed"


            }else{
              totResult()
              title.innerText = "Exam not passed"

            }

        }


      }


  uploadquestion()

      function totResult(){
              contButtons.style.display ="none"
              pQuestionNumber.style.display ="none"
              let contResult = document.createElement("p")
              contResult.classList.add("result")
              contResult.innerText = result + "0" + " /100"
              container.appendChild(contResult)
      }


  const timeElement = document.getElementById("time");
  const circle = document.querySelector(".circle");
  let containTimer = document.querySelector(".timer-container")

  let duration = 5 // per camgiare la durata
  const totalDuration = duration
  let timer 
  timeElement.textContent = duration


  function startTimer() {
  timer = setInterval(() => {
      duration--;

      timeElement.textContent = duration;

      const percentage = ((totalDuration - duration) / totalDuration) * 360;

      circle.style.background = `conic-gradient(
          #00e0ff ${percentage}deg,
          #9900ff ${percentage}deg
      )`

      if(correntquestion == questions.length){
            totResult()
            containTimer.style.display = "none"
            clearInterval(timer);
            duration = 0
            timeElement.textContent = "0";

          } else if (duration <= 0) {
            correntquestion++
            restartTimer()

      }
  }, 1000)
  }

  startTimer();

  function restartTimer(){
  uploadquestion()
  clearInterval(timer)
  duration = 5
  timeElement.textContent = duration;
  startTimer()
  }

