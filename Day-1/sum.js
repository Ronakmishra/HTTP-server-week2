const express = require("express");
const app = express();
const port = 3000;
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
  var counter = req.query.counter; // this is "query params"--takes user input
  var sum = calculateSum(counter);

  var sum1 = {
    totalsum: sum,
  };

  res.send(sum1);
}
//----------------------------------------//

app.get("/handlesum", handleFirstRequest);

function started() {
  console.log("Example App Listening on port " + port);
}
app.listen(port, started);
