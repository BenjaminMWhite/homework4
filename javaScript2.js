var buttonOne = document.createElement("button")
var buttonTwo = document.createElement("button")
var buttonThree = document.createElement("button")
var buttonFour = document.createElement("button")
var buttonFive = document.createElement("button")
var buttonSix = document.createElement("button")
var buttonSeven = document.createElement("button")
buttonOne.className = "button1"
var quizQuestion = ["what is 4!","what is 4*6","what is 2^3 * 3", "what is 11+13", "what is the (square root of 625) -1", "what is 7*4-4", "what is 53416549mod 25", 
    "what is the name of the popular middle school math card game where participants have to use various mathematical operation to reach the title value",
    "what popular fox tv drama staring kiefer sutherland as jack bauer took the events of a day", "How many people served as president of the united states before William McKinley?",
    "solve for x, x^2-48x+57=0","as of january 1st 2021 how many marvel cinematic films were there"] 
    var answerOne =["24","6","22","42","1", "24", "0", "jenga", "lost","24","19","25"]
    var answerTwo= ["22","24","20","12","8", "90", "3", "sorry", "battelstar galatica","25","18","36"]
    var answerThree = ["18","2","24","420","9", "4", "12", "24", "24","29","24","24"]
     var answerFour = ["125","26","25","24","24", "2", "24", "equations", "family guy ","2","100","2"]
    var AnswerKey = [1,2,3,4,4,1,4,3,3,1,3,3]
    var i = 0
    var n = 0
    var currentQuestion = quizQuestion[n]
    var questionDisplay = document.getElementById("currentQuestion")
    
    var currentAnswerOne = answerOne[n]
    var questionDisplay1 = document.getElementById("currentAnswerOne")
    
    var currentAnswerTwo = answerTwo[n]
    var questionDisplay2 = document.getElementById("currentAnswerTwo")
    
    var currentAnswerThree = answerThree[n]
    var questionDisplay3 = document.getElementById("currentAnswerThree")
    
    var currentAnswerFour = answerFour[n]
    var questionDisplay4 = document.getElementById("currentAnswerFour")
var highscores=[0,0,0]

var t= 75
var gameIsPlaying =false
function quizzTimer(){t= t-1}


var checkedAnswer =AnswerKey[n]
    
var checkAnswer

    
function checkAnswer1()
{console.log("checkingAnswerOne")
    checkAnswer = 1
    console.log(checkAnswer)
    console.log(checkedAnswer)
    console.log(n)
    console.log(questionDisplay.innerHTML)
    if (checkAnswer ===checkedAnswer)
    i=i+10000
    n=n+1
    if (n<12){
    currentQuestion = quizQuestion[n]
 
    
    currentAnswerOne = answerOne[n]
    
    
     currentAnswerTwo = answerTwo[n]
  
    
     currentAnswerThree = answerThree[n]
 
    
     currentAnswerFour = answerFour[n]

    questionDisplay.innerHTML = currentQuestion
    questionDisplay1.innerHTML = currentAnswerOne
    questionDisplay2.innerHTML = currentAnswerTwo
   questionDisplay3.innerHTML = currentAnswerThree
     questionDisplay4.innerHTML = currentAnswerFour




    }
    else window.location.href = "C:/Users/bwhit/Documents/university/homework4/hall of fame.html"
  //  else 
   // quizzTimer = quizzTimer-1
    }
function checkAnswer2(){
    checkAnswer = 2
    if (checkAnswer===checkedAnswer)
    i=i+10000
    n=n+1
    if (n<12){
    currentQuestion = quizQuestion[n]
 
    
    currentAnswerOne = answerOne[n]
    
    
     currentAnswerTwo = answerTwo[n]
  
    
     currentAnswerThree = answerThree[n]
 
    
     currentAnswerFour = answerFour[n]

    questionDisplay.innerHTML = currentQuestion
    questionDisplay1.innerHTML = currentAnswerOne
    questionDisplay2.innerHTML = currentAnswerTwo
   questionDisplay3.innerHTML = currentAnswerThree
     questionDisplay4.innerHTML = currentAnswerFour

    }
    else window.location.href = "C:/Users/bwhit/Documents/university/homework4/hall of fame.html"
}
  //  else 
   // quizzTimer = quizzTimer-1

function checkAnswer3(){
    checkAnswer = 3
    if (checkAnswer ===checkedAnswer)
    i=i+10000
    n=n+1
    if (n<12){
    currentQuestion = quizQuestion[n]
 
    
    currentAnswerOne = answerOne[n]
    
    
     currentAnswerTwo = answerTwo[n]
  
    
     currentAnswerThree = answerThree[n]
 
    
     currentAnswerFour = answerFour[n]

    questionDisplay.innerHTML = currentQuestion
    questionDisplay1.innerHTML = currentAnswerOne
    questionDisplay2.innerHTML = currentAnswerTwo
   questionDisplay3.innerHTML = currentAnswerThree
     questionDisplay4.innerHTML = currentAnswerFour


  //  else 
  // quizzTimer = quizzTimer-1
}
else window.location.href = "C:/Users/bwhit/Documents/university/homework4/hall of fame.html"}
function checkAnswer4(){
    checkAnswer = 4
    if (checkAnswer ===checkedAnswer)
    i=i+10000
    n=n+1
    if (n<12){
    currentQuestion = quizQuestion[n]
 
    
    currentAnswerOne = answerOne[n]
    
    
     currentAnswerTwo = answerTwo[n]
  
    
     currentAnswerThree = answerThree[n]
 
    
     currentAnswerFour = answerFour[n]

    questionDisplay.innerHTML = currentQuestion
    questionDisplay1.innerHTML = currentAnswerOne
    questionDisplay2.innerHTML = currentAnswerTwo
   questionDisplay3.innerHTML = currentAnswerThree
     questionDisplay4.innerHTML = currentAnswerFour
    }
    else window.location.href = "C:/Users/bwhit/Documents/university/homework4/hall of fame.html"
}




    questionDisplay1.addEventListener("click",checkAnswer1)
    checkAnswer = 1
    questionDisplay2.addEventListener("click",checkAnswer2)
    checkAnswer = 2
    questionDisplay3.addEventListener("click",checkAnswer3)
    checkAnswer = 3
    questionDisplay4.addEventListener("click",checkAnswer4)
    checkAnswer = 4


window.onload = function() {quizTimer()}
console.log("start")
const quizTimer = () =>{ 
    console.log("quizTimer function called")
        setInterval(quizzTimer,1000)
       startGame()
    }
       
        function startGame(){ 
       

            
       gameIsPlaying = true}
   // while (t>0) {
    
   // if (n !== 12 && questionDisplay.innerHTML !==currentQuestion) { 


       questionDisplay.innerHTML = currentQuestion
       questionDisplay1.innerHTML = currentAnswerOne
       questionDisplay2.innerHTML = currentAnswerTwo
      questionDisplay3.innerHTML = currentAnswerThree
        questionDisplay4.innerHTML = currentAnswerFour
 
 
 //   }
    // else t= t-10000

  //  }
    //go to point a
    
//}
    // 
    //if score <= min score high score array
    // goto html page 2
    //else go to html page 3
    //}
    //else {score = score + time
    // stop time}
    
    //congratulations prompt ask for initials
    // compare the score to scores in the array for rank denoted R, make initials 
    //the Rth term inside initials
    //delete min score an
     
