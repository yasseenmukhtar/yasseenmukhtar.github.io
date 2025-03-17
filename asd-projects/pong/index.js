/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $('#board').width();
  const BOARD_HEIGHT = $('#board').height();
  const PADDLE_HEIGHT = $('#paddleLeft').height();
  const BALL_WIDTH = $('#ball').width();
  const BALL_HEIGHT = $('#ball').height();
  // Game Item Objects
  const KEY = {
    "W": 87,
    "S": 83,
  
    "UP": 38,
    "DOWN": 40
  }
  
  
  
  
  function createGameItem(id, speedX, speedY){
    var obj = {
      id: id,
      x: parseFloat($(id).css("left")),
      y: parseFloat($(id).css("top")),
      speedX: speedX,
      speedY: speedY,
      w: $(id).width,
      h: $(id).height,
    }
    return obj;
  }

  var paddleLeft = createGameItem("#paddleLeft", 0, 0);
  var paddleRight = createGameItem("#paddleRight", 0, 0);
  var ball = createGameItem("#ball", (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1), (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1) )

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
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
    drawGameItem(paddleLeft)
    drawGameItem(ball)
    updateGameItem(paddleLeft)
    updateGameItem(ball)
    drawGameItem(paddleRight)
    updateGameItem(paddleRight)
    wallCollision();
    scoreDetector();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.W){
      paddleLeft.speedY = -5;
    }
    if(event.which === KEY.S){
      paddleLeft.speedY = 5;
    }
    if(event.which === KEY.UP){
      paddleRight.speedY = -5;
    }
    if(event.which === KEY.DOWN){
      paddleRight.speedY = 5;
    }
  }

  function handleKeyUp(event){
    if(event.which === KEY.W)
      paddleLeft.speedY = 0;
    if(event.which === KEY.S){
      paddleLeft.speedY = 0;
    }
    if(event.which === KEY.UP){
      paddleRight.speedY = 0;
    }
    if(event.which === KEY.DOWN){
      paddleRight.speedY = 0;
    }
  }
//check boundaries of opaddles
//handle what happens when ball touches the walls
//what happens whwn the ball touches the paddles
//what happens when someone wins
//function that handles the points
//handle reseting the game
//determine if 
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  //Movement Helper Info







function drawGameItem(obj){
    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }
  
  function updateGameItem(obj){
    obj.x += obj.speedX;
    obj.y += obj.speedY;
  }

  function wallCollision() {
    if (paddleLeft.y < 0 || paddleLeft.y > BOARD_HEIGHT - PADDLE_HEIGHT) {
      paddleLeft.y -= paddleLeft.speedY;
    }
    if (paddleRight.y < 0 || paddleRight.y > BOARD_HEIGHT - PADDLE_HEIGHT) {
      paddleRight.y -= paddleRight.speedY;
    }
    if (ball.y < 0 || ball.y > BOARD_HEIGHT - BALL_HEIGHT) {
      ball.y -= ball.speedY;
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
