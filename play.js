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
    MAX_LENGTH = questions.length;

    document.getElementById('questionNumber').innerHTML = 'Question: ' + (counter+1) + '/' + MAX_LENGTH;
    document.getElementById('score').innerHTML = 'Score: ' + score;

    if(counter===MAX_LENGTH){
        //SET YOUR CURRENT SCORE IN LOCAL STORAGE
            /*SET YOUR CURRENT SCORE IN HIGH SCORE ARRAY STORED IN LOCAL STORAGE - IF APPLICABLE*/
        // NAVIGATE TO EXIT.HTML
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
}

var choiceClick = () => {
    //DETERMINE IF USER HAS SELECTED THE RIGHT ANSWER OR NOT 
        //FIRST GET THE ELEMENT/ANCHORTAG ID WHICH THE USER HAS CLICKED e.g. choice2
        for(i = 0; i < 4; i++)
        var selectBox = document.getElementById("choice" + (i+1));
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        
        //EXTRACT CHOICE NUMBER FROM THE ABOVE ANCHOR TAG ID e.g. choice2 ===> 2  // STORE IT IN TEMP VARIABLE

        //IF current_answer_number + 1 ===  temp //- IF YES - INCREMENT SCORE VARIABLE BY SCOREINCREMENT
        getQuestion();

}

setTimeout(getQuestion,1000);





