const express = require("express");
const bodyparser = require("body-parser"); // body parser
const app = express();
const port = 3000;
//----------------------------------------//

/* we need to use external libraries for body is express */
app.use(bodyparser.json());

//----------------------------------------//

/*this function calculates the sum in a range */
function calculateSum(counter) {
  let sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}

//  ----------------------------------------//

/*factorial function for the counter */
function fact(counter) {
  let answer = 1;
  for (let i = 1; i <= counter; i++) {
    answer *= i;
  }
  return answer;
}

//  ----------------------------------------//
/*This shows the request in JSON-- javascript object notation */
function handleFirstRequest(req, res) {
  var counter = req.body.counter; // this is body Param for counter-- possible beacause of the boody-parser library

  var totalSum = calculateSum(counter);
  var factorial = fact(counter);

  //object to o/p in JSON
  var answerObject = {
    sum: totalSum,
    factorialOfTheNumber: factorial,
  };

  res.status(200).send(answerObject);
}

//----------------------------------------//

app.post("/handlesum", handleFirstRequest); //route handler

function started() {
  console.log("Example App Listening on port " + port);
}
app.listen(port, started); // Port handler
