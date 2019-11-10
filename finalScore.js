var userScore = localStorage.getItem("userScore");
var latestScores = localStorage.getItem("latestScores");
document.getElementById('displayScore').innerHTML  = 'Score: ' + userScore;

if(latestScores == null){
    latestScores = [];
}
else{
    var latestScores = latestScores.split(',');
}
latestScores.push(userScore);
latestScores = latestScores.toString();
console.log(latestScores);
var final = localStorage.setItem("latestScores",latestScores);





// var userScore = localStorage.getItem("userScore");
// var latestScores = localStorage.getItem("latestScores");
// var myScore = [];
// myScore.push(userScore);
// myScore = myScore.toString();
// console.log(myScore);

// hover effect for option Selection.



// myScore.push(userScore);
// myScore = myScore.toString();
// localStorage.setItem("latestScores",myScore);
// console.log(myScore);
