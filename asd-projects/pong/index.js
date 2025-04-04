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

  function createGameItem(id, speedX, speedY){ //This function creates a game item, along with its properties(position, speed, etc)
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
  var incBallSpeed = 1;
  var mySound;
  var paddleLeft = createGameItem("#paddleLeft", 0, 0);
  var paddleRight = createGameItem("#paddleRight", 0, 0);
  var ball = createGameItem("#ball", (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1), (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1));
  var leftScore = 0;
  var rightScore = 0;
  $("#playAgainButton").hide();
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); 
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function newFrame() { //New frame calls each function that is required to excute on each frame.
    moveObject(paddleLeft);   
    moveObject(ball);         
    moveObject(paddleRight); 
    detectGameEnd();
    drawGameItem(paddleLeft); 
    drawGameItem(ball);
    drawGameItem(paddleRight);
    paddleBoundaries(paddleLeft);
    paddleBoundaries(paddleRight);
    ballCollisionTB();
    ballCollisionLR();
    collisionWithPaddles();
    
  }
//read instructions for score

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function moveObject(obj) { //function called moveObject that referenced the object made in the factory function. It is abstracted.
    obj.x += obj.speedX;
    obj.y += obj.speedY;
  }

  function drawGameItem(obj){ //Draw game item draws the item's position on each frame. This also references the factory fucntion object so that there is no need to hard-code each item.
    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }
  function paddleBoundaries(obj) { //paddleBoundaries uses an if statement to detect if either paddles have exceeded the board's borders.
    if (obj.y < 0 || obj.y > BOARD_HEIGHT - PADDLE_HEIGHT) {
      obj.y -= obj.speedY;
    }
  }
function ballCollisionTB(){ //This function checks if the ball has collided with either the top or bottom borders. If it has, it will change the speed to the opposite of what ever the speed was.
  if (ball.y < 0) {
    mySound = new sound("audio/doink.wav");
    mySound.play();
    ball.speedY = -ball.speedY;  
    
  }
  if (ball.y + BALL_HEIGHT > BOARD_HEIGHT) {
    mySound = new sound("audio/doink.wav");
    mySound.play();
    ball.speedY = -ball.speedY;  
    
  }
}
function ballCollisionLR(){ //This function detects if the ball has touched either the left or right sides of the board. If it has, it wil, add a score to which ever side got the point, and reset the ball and paddle's position.
  if(ball.x + BALL_WIDTH > BOARD_WIDTH){
    //add a score to whoever made the point
    leftScore++
    $("#leftScoreValue").text(leftScore)
    reset();
  }
  if(ball.x + BALL_WIDTH < 0){
    //reset pos
    rightScore++
    $("#rightScoreValue").text(rightScore)
    //add a score to whoever made the point
    reset();
  }
}
function increaseBallSpeed(){
  if(ball.speedX < 0){
    ball.speedX -= incBallSpeed;
  } else{
    ball.speedX += incBallSpeed;
  }
  if(ball.speedY < 0){
    ball.speedY -= incBallSpeed;
  } else{
    ball.speedY += incBallSpeed;
  }
}
function collisionWithPaddles(){ //This function is to detect collision with the paddles. If it has, the speed will be reversed to create a deflection effect.
  if (doCollide(ball, paddleLeft)) {
    mySound = new sound("audio/doink.wav");
    mySound.play();
    ball.speedX = -ball.speedX;
    increaseBallSpeed();
  }
  if (doCollide(ball, paddleRight)) {
    mySound = new sound("audio/doink.wav");
    mySound.play();
    ball.speedX = -ball.speedX;
    increaseBallSpeed();
  
  }
}
function reset(){ //This function gets all of the original values of the paddles and the ball, so that when a point is scored, the function is called, and the game items, reset their position.
   paddleLeft = createGameItem("#paddleLeft", 0, 0);
   paddleRight = createGameItem("#paddleRight", 0, 0);
   ball = createGameItem("#ball", (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1), (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1));
  ball.x = BOARD_WIDTH /2;
  ball.y = BOARD_HEIGHT /2;
  
}

// I a function with non-hardcoded items. This gets referenced in newFrame
  function doCollide(obj1, obj2) { //This function takes non-hard-coded values so that it can replace the values inside of the doCollide fucntion for the paddles.
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

  function playAgainButton(){ //This function is made so that the "Play Again" button is displayed when ever the game is over. It refreshes the page when clicked.
    $('#playAgainButton').css("top", BOARD_HEIGHT / 2);
    $('#playAgainButton').css("left", BOARD_WIDTH / 2 - $('#playAgainButton').width() / 2);
    $("#playAgainButton").show();
    
  }
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////// KEY HANDLING ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleKeyDown(event) { //This function checks to see if any of these specific keys are being held down. If they are, the speed values will change from 0 to their respectie values.
    if(event.which === KEY.W){
      paddleLeft.speedY = -8;
    }
    if(event.which === KEY.S){
      paddleLeft.speedY = 8;
    }
    if(event.which === KEY.UP){
      paddleRight.speedY = -8;
    }
    if(event.which === KEY.DOWN){
      paddleRight.speedY = 8;
    }
  }

  function handleKeyUp(event){//This function is similar to the handleKeyDown function because when the key is released, the speed goes back to the original speed, 0.
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
  ///Other Helper Functions///
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
      this.sound.play();
    };
    this.stop = function() {
      this.sound.pause();
    };
  }
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// END GAME FUNCTION ////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function detectGameEnd(){ //This function detects if the maximum number of points has been scored. If it has, the entire system will reset.
    if(leftScore === 7 || rightScore === 7){
      reset();
      endGame();
    }
  }
  
  function endGame() { //This function calls the playAgainButton function that displays a button that refreshes the page to play again.
    playAgainButton();
    (document).off();
  }
}
