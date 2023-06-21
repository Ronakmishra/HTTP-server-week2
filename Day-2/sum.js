const express = require("express");
// const bodyparser = require("body-parser"); // body parser
const app = express();
const port = 3000;

//----------------------------------------//

/* This is middelware -- we can call it as autheticator aswell, well sort of */

// function middelware1(req, res, next) {
//   console.log("Inside the middleware :");
//   next();
// }
// app.use(middelware1);

//----------------------------------------//

/* we need to use external libraries for body is express */
// app.use(bodyparser.json());

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
function handleFirstRequest(req, res) {
  // console.log(req.body); // logs the body details from the body-parser
  // var counter = req.body.counter; // this is body Param for counter-- possible beacause of the boody-parser library

  // console.log(req.headers);
  var counter = req.headers.counter; // this is header param

  // var counter = req.query.counter; // this is "query params"--takes user input
  var sum = calculateSum(counter);
  var answer = "The sum is " + sum;
  res.send(answer);
}

//----------------------------------------//

// app.get("/handlesum", handleFirstRequest);
app.post("/handlesum", handleFirstRequest); //route handler

function started() {
  console.log("Example App Listening on port " + port);
}
app.listen(port, started); // Port handler
