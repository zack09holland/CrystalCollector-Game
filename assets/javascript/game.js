// Object to hold and get the random numbers
var randoNum = {
    goal : Math.floor(Math.random() * 102)+19,
    crystal : function() {return Math.floor(Math.random() *12)+1},
}
var wins = 0;
var losses = 0;
var currentVal = 0;
var gameEnd = false;
// Get the random number for the goal
$("#goalVal").text(randoNum.goal);
// Set the crystal values
$(".diamond").attr('value',randoNum.crystal);
$(".emerald").attr('value',randoNum.crystal);
$(".ruby").attr('value',randoNum.crystal);
$(".sapphire").attr('value',randoNum.crystal);

//console.log(document.getElementById("currentVal").innerText);

//When a user clicks a crystal, add the value of crystal to the website
$(".thumbnail").on('click',function(){
    currentVal += parseInt($(this).attr('value'));
    $("#currentVal").text(currentVal);
    console.log($(this).attr('value'))
    checkScore();
})
//check if total score equals the random number goal
//  if it matches they win, increment win tally
//  if it is over they lose
function checkScore(){
    //currentVal = document.getElementById("currentVal").innerText;
    // If the current user total val(currentVal) = random number value(randoNum.goal)
    // then the user has won
    //  -Increment wins and reset game
    if(currentVal === randoNum.goal){
        wins++;
        $('#winsScore').text(wins);
        resetGame();
    }
    else if(currentVal > randoNum.goal){
        losses++;
        $('#lossesScore').text(losses);
        resetGame();
    }
}
//restart the game if the they win or lose
function resetGame(){
    $('#currentVal').text('0');
    currentVal = 0;

    randoNum.goal =  Math.floor(Math.random() * 102)+19;
    $("#goalVal").text(randoNum.goal);
    
    $(".diamond").attr('value',randoNum.crystal);
    $(".emerald").attr('value',randoNum.crystal);
    $(".ruby").attr('value',randoNum.crystal);
    $(".sapphire").attr('value',randoNum.crystal);

}