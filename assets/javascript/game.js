// Object to hold and get the random numbers
var randoNum = {
    goal : Math.floor(Math.random() * 102)+19,
    crystal : function() {return Math.floor(Math.random() *12)+1},
}
var current = 0;
// Get the random number for the goal
$("#goalVal").text(randoNum.goal);
// Set the crystal values
$(".diamond").attr('value',randoNum.crystal);
$(".emerald").attr('value',randoNum.crystal);
$(".ruby").attr('value',randoNum.crystal);
$(".sapphire").attr('value',randoNum.crystal);


//When a user clicks a crystal, add the value of crystal to the website
$(".thumbnail").on('click',function(){
    current += parseInt($(this).attr('value'));
    $("#currentVal").text(current);
    console.log($(this).attr('value'))
})
//check if total score equals the random number goal
//  if it matches they win, increment win tally
//  if it is over they lose
function checkScore(input){
    return;
}
//restart the game if the they win or lose