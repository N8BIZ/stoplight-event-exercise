(function() {
  'use strict';
  var stopButton = document.getElementById("stopButton");
  var stopLight = document.getElementById("stopLight");

  stopButton.addEventListener("click", function () {
        if(stopLight.style["background-color"] === "red"){
        (stopLight.style["background-color"] = "black");
      }else{(stopLight.style["background-color"] = "red")}
  });
  stopButton.addEventListener("mouseenter", function (){
    var traget = event.target,
    related = event.relatedTraget,
    match;
    console.log("Entered <textContent> button");
  });
  stopButton.addEventListener("mouseout", function (){
    var traget = event.target,
    related = event.relatedTraget,
    match;
    console.log("Left <textContent> button");
  });

  var slowButton = document.getElementById("slowButton");
  var slowLight = document.getElementById("slowLight");

  slowButton.addEventListener("click", function () {
        if(slowLight.style["background-color"] === "yellow"){
        (slowLight.style["background-color"] = "black");
      }else{(slowLight.style["background-color"] = "yellow")}
  });
  slowButton.addEventListener("mouseenter", function (){
    var traget = event.target,
    related = event.relatedTraget,
    match;
    console.log("Entered <textContent> button");
  });
  slowButton.addEventListener("mouseout", function (){
    var traget = event.target,
    related = event.relatedTraget,
    match;
    console.log("Left <textContent> button");
  });

  var goButton = document.getElementById("goButton");
  var goLight = document.getElementById("goLight");

  goButton.addEventListener("click", function () {
        if(goLight.style["background-color"] === "green"){
        (goLight.style["background-color"] = "black");
      }else{(goLight.style["background-color"] = "green")}
  });
  goButton.addEventListener("mouseenter", function (){
    var traget = event.target,
    related = event.relatedTraget,
    match;
    console.log("Entered <textContent> button");
  });
  goButton.addEventListener("mouseout", function (){
    var traget = event.target,
    related = event.relatedTraget,
    match;
    console.log("Left <textContent> button");
  });





})();
