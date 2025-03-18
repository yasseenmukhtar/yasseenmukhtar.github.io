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
      w: $(id).width(),
      h: $(id).height(),
    }
    return obj;
  }

  var paddleLeft = createGameItem("#paddleLeft", 0, 0);
  var paddleRight = createGameItem("#paddleRight", 0, 0);
  var ball = createGameItem("#ball", (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1), (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1));

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); 
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function newFrame() {
    moveObject(paddleLeft);   
    moveObject(ball);         
    moveObject(paddleRight); 

    drawGameItem(paddleLeft); 
    drawGameItem(ball);
    drawGameItem(paddleRight);
    paddleBoundaries(paddleLeft);
    paddleBoundaries(paddleRight);
    ballCollisionTB();
    ballCollisionLR();
    
    if (doCollide(ball, paddleLeft)) {
      ball.speedX = -ball.speedX;
    }

    
    if (doCollide(ball, paddleRight)) {
      ball.speedX = -ball.speedX;
    }
  }
//read instructions for score

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function moveObject(obj) {
    obj.x += obj.speedX;
    obj.y += obj.speedY;
  }

  function drawGameItem(obj){
    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }


  function paddleBoundaries(obj) {
    if (obj.y < 0 || obj.y > BOARD_HEIGHT - PADDLE_HEIGHT) {
      obj.y -= obj.speedY;
    }
    
    
  }
function ballCollisionTB(){
  if (ball.y < 0) {
    ball.speedY = -ball.speedY;  
    
  }

  if (ball.y + BALL_HEIGHT > BOARD_HEIGHT) {
    ball.speedY = -ball.speedY;  
  }
}
function ballCollisionLR(){
  if(ball.x + BALL_WIDTH > BOARD_WIDTH){
    reset();
    //reset pos
    //add a score to whoever made the point
  }
  if(ball.x + BALL_WIDTH < 0){
    reset();
    //reset pos
    //add a score to whoever made the point
  }
}
function reset(){
   paddleLeft = createGameItem("#paddleLeft", 0, 0);
   paddleRight = createGameItem("#paddleRight", 0, 0);
   ball = createGameItem("#ball", (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1), (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1));
  ball.x = BOARD_WIDTH /2;
  ball.y = BOARD_HEIGHT /2;
  }
  // I a function with non-hardcoded items. This gets referenced in newFrame
  function doCollide(obj1, obj2) {
    if (
      obj1.x + obj1.w > obj2.x && 
      obj1.x < obj2.x + obj2.w &&
      obj1.y + obj1.h > obj2.y &&
      obj1.y < obj2.y + obj2.h
    ) {
      return true;
    }
    return false;
  }

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////// KEY HANDLING ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

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
  
  
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// END GAME FUNCTION ////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
