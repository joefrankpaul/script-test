// console.log("start a program")
// alart ("hello");
// document.write("<h1>what is your name</h1>");
// function randomNumber(upper) {
//     return Math.floor(Math.random() * upper) + 1;
// }
alert("hello, hope ur are well?");

// var randomName = getRandomName(10);
// var guess;
// var guessCount = 0;
// varcorrectGuess = false

// function getRandomName(upper){
//     var num = Math.floor(Math.random() * upper) + 1;
//     return num;
// }

do { 
    guess = prompt('what is your name');
    guess = prompt('what is your age');
    guessCount += 1;
    if (parseInt(guess)=== randomName){
     correctGuess = true;
    } 
} while ( ! correctGuess )
