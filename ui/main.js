//Counter code
var button = document.getElementById("counter");
button.onclick = function() {
  //JS make us to Think in strange ways sometimes, we need to think about what to do when we receive the request response before we actually make the request  
  //Create  a request object to capture endpoint
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadystatechange = function () {
    if (request.readyState == XMLHttpRequest.DONE) {
        //Take some action
        if (request.status == 200) {
            var counter = request.responseText;
              //Render the variable in the correct span
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
        }
    }
    //Ignore if its not done
  };
  //Make the request
  request.open("GET", "http://jyoharsh.imad.hasura-app.io/counter", true);
  request.send(null);
};
