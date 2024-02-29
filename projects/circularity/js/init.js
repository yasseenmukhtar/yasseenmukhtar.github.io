var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; //This variable is used to hold one circle
        var circles = []; //This variable is used to hold all the circles in one singular array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){          //This function actually draws the circles
            // Code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);        //This draws the cicle in a random pos
            physikz.addRandomVelocity(circle, canvas,10,10);    //this line of code makes the circles have a randon velocity
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        
        
        
        for (var i = 0; i < 100; i++) {    //In todo 3, I called some functions called drawCircle(); To make it less repetitive, I put a for loop for todo 7
            // do something
            drawCircle(); //Just one function call
        }




        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() { //updat function to constantly update the game and the elements on the game
            // TODO 4 : Update the circle's position //
           
           
            //here, I deleted the function calls because I used a for loop so it isn't repetitive.
            
            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
           // TODO 5 : Call game.checkCirclePosition() on your circles.

                //here, I deleted the function calls because I used a for loop so it isn't repetitive.

            // TODO 8/9 : Iterate over the array
            for (var i = 0; i < circles.length; i++) {      //This for loop was created to iterate over the array cretaed on line 24
                // code to repeat using i
               circles.length[i];       
               physikz.updatePosition(circles[i])       //This line is used to update the position of all the circles, (i)
               game.checkCirclePosition(circles[i])     //This line just checks the circles position
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {  

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {        //Created an if statement so that if the circles cross the right boarder, they will appear on the left 
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(circle.x < 0){           //Created an if statement so that if the circles cross the left boarder, they will appear on the right 
                circle.x = 0;                   //This will reset the x pos to 0
                circle.x = canvas.width;        //This will reset the x pos to circle.width
            }

            if(circle.y < 0){           //Created an if statement so that if the circles cross the top boarder, they will appear on the bottom 
                circle.x = 0;          //This will reset the x pos to 0
                circle.y = canvas.height;   //This will reset the y pos to canvas.height
            }

            if(circle.y > canvas.height){           //Created an if statement so that if the circles cross the bottom boarder, they will appear on the top 
                circle.x = 0;               //This will reset the x pos to 0
                circle.y = 0;               //This will reset the y pos to 0
            }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;                         //117-123 is other technical code that I didn't need to edit.
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //            //Same for lines 126-130
    module.exports = init;
}
