var x;
var i;
var questions= [];
var answer = [];
var wrongAns = [];
var displayQuestion;
var displayChoices = [];
var counter = 0;
var score = 0;
var scoreIncrement = 10;
var MAX_LENGTH;
var current_answer_number;
var fetchTest = fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
.then(response=>{return response.json();})
.then(json => {
        json.results.map((value,index)=>{
            questions.push(value.question);
            answer.push(value.correct_answer);
            wrongAns.push(value.incorrect_answers);
        
        });
    
    }
    );

    
function getQuestion(){
    document.querySelectorAll('.choices').forEach(el => el.classList.remove('rightAnswer','wrongAnswer'));
    
    MAX_LENGTH = questions.length;
    //update score
    document.getElementById('questionNumber').innerHTML = 'Question: ' + (counter+1) + '/' + MAX_LENGTH;
    document.getElementById('score').innerHTML = 'Score: ' + score;

    if(counter === MAX_LENGTH){
        var sendScore = score.toString();
        localStorage.setItem("userScore",sendScore);

    
        window.location.replace("finalScore.html");
    }
    current_answer_number = Math.floor(Math.random() * 3) + 1;
 
    displayQuestion = questions[counter];
    displayChoices = wrongAns[counter];
    displayChoices.splice(current_answer_number,0,answer[counter]);

    document.getElementById('question').innerHTML = displayQuestion;

    for(i=0;i<4;i++){
        document.getElementById('choice' + (i+1)).innerHTML = displayChoices[i];
    }
    counter++;
    //display counter in question
}

var choiceClick = () => {
    //DETERMINE IF USER HAS SELECTED THE RIGHT ANSWER OR NOT 
        //FIRST GET THE ELEMENT/ANCHORTAG ID WHICH THE USER HAS CLICKED e.g. choice2
    
    var selectedChoice = event.currentTarget.getAttribute('id');
       if(selectedChoice === 'choice'+ (current_answer_number + 1))
       {
        score = score + scoreIncrement;    
        document.getElementById(selectedChoice).classList.add('rightAnswer');
        }  
        else { 
            document.getElementById(selectedChoice).classList.add('wrongAnswer');
        }
     
       setTimeout(getQuestion,1000);

       //choice right or wrong use Else and give color.
            


}

setTimeout(getQuestion,2000);





