// Implement a function countdownGenerator() that takes in a number x and 
// returns a function that counts down when it is called (see starter code below).

var countdownGenerator = function (x) {
    /* your code here */
  var start = x 


  return function(){
      if (start > 0){
          console.log("T-minus ", start, "..." )
      } if(start === 0){
          console.log("Blast Off!")
      } if ((start < 0)){
        console.log("Rockets already gone, bub!")
      }
start--

    
    
  }
}
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!