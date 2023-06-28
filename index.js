//razzle();
//function razzle() {
// console.log("You've been razzled!");
//}

//function razzle(lawyer = "Billy", target = "'em") {
    //console.log(`${lawyer} razzle-dazzles ${target}!`);
  //}
  //razzle(); 
 // razzle("Methuselah", "T'challah"); 

 //function saturdayFun(){
    //console.log("This Saturday, I want to roller-skate"); 
   // }
    //saturdayFun();

// function(){
    //console.log("Yet more razzling");
// }
//(function () {
    //console.log("Yet more razzling");
//})

//const button = document.getElementById("button");
//button.addEventListener("click", function () {
  //console.log("Yet more razzling");
//});

//const fn = function () {
    //console.log("Yet more razzling");
 // }; 
  //fn;
  //fn();

  //const mondayWork = function() {
    //console.log("This Monday, I will go to the office");
  //};
  //mondayWork();

  //(function (baseNumber) {
    //return baseNumber +3;
  //})(2);

 // function outer(greeting, msg = "It's a fine day to learn") {
    //return function (name, lang = "Python") {
      //return `${greeting}, ${name}! ${msg} ${lang}`;
    //};
 // }
  
  //outer("Hello")("student", "JavaScript");

  function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  saturdayFun();  
  saturdayFun('I want to bathe my dog!'); 

mondayWork();  
mondayWork('have to work from home');  

const encouragingPromptFunction = wrapAdjective("!!!");
encouragingPromptFunction('a dedicated programmer');  

wrapAdjective("%")("a dedicated programmer");  
