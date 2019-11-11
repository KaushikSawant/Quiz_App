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
