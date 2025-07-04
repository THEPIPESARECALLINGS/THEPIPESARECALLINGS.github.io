/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  var KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    UP: 38
  }

  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0
  }
  // Game Item Objects



  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    
    repositionGameItem();
    wallCollision();
    redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(event.key);
    if (event.which === KEY.ENTER) {
      console.log("why are you pressing enter?");
    }
    else if (event.which === KEY.UP) {
      walker.speedY = -5;
    }
    else if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
    else if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }
    else if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.UP) {
      walker.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
    if (event.which === KEY.LEFT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  function repositionGameItem() {
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
  }

  function wallCollision() {
   
   var boardWidth = $("#board").width()
   var boardHeight = $("#board").height() 


    if (walker.positionX < 0) {
      walker.positionX -= walker.positionX
    }
    if (walker.positionX > boardWidth) {
      walker.positionX = boardWidth
    }
    if (walker.positionY < 0) {
      walker.positionY -= walker.positionY
    }
    if (walker.positionY > boardHeight) {
      walker.positionY = boardHeight
    }




  } 
}
