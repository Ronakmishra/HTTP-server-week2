//------------------------------------//

/* Code for reading file with fs */

const fs = require("fs");
function callbackfn(err, data) {
  console.log(data);
}
fs.readFile("a.txt", "utf-8", callbackfn);
