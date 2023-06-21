//----------------------------------------------------------------//

function logRespondBody(jsonBody) {
  console.log(jsonBody);
}

function callbackfn(result) {
  result.json().then(logRespondBody);
}

let sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/handlesum?counter=50", sendObj).then(callbackfn);
