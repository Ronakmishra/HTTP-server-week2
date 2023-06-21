const express = require("express");
const app = express();
const port = 3000;

function handleFirstRequest(req, res) {
  res.send("hello World!");
}

app.get("/", handleFirstRequest);

function started() {
  console.log("Example App Listening on port " + port);
}
app.listen(port, started);

// -----------------------------------//

//   var req = req.query.counter;
//   var calculatedSum = calculateSum(counter);
//   console.log(calculatedSum);
//   var answer = "the sum is " + calculateSum;
//   res.send(answer);
// }
