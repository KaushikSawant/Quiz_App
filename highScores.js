var latestScores = localStorage.getItem('latestScores');
if(latestScores == null){
    latestScores = [];
}
else{
    latestScores = latestScores.split(',');
}

latestScores.forEach((element,index)=>{
    document.getElementById('display').innerHTML = document.getElementById('display').innerHTML 
    + '<p class="output">' + element + '</p>';
});