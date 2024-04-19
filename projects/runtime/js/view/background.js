var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
            var tree; //was used for a tree
            var catTrees = []; //new variable called "catTrees" used for cat tree images in project.
 
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.bitmap("img/GalaxyBackground.png"); //Variable called "backgroundFill". It's used to draw the image I've chosen as a background.
            background.addChild(backgroundFill); //Adds the child(the image) to backgroundFill.
            
            var groundFill = draw.rect(canvasWidth, canvasHeight, 'gray'); //the actual ground that hallebot walks on.
            
            groundFill.x = 4; //Ground fill x(how much of the screen it covers by x pos, so left and right).
            groundFill.y = groundY; //Ground fill x(how much of the screen it covers by y pos, so up and down).
            background.addChild(groundFill); // Adds child(ground) to groundFill
            
            // TODO 2: - Add a moon and starfield               //Lines 54-59 is a for loop used to create 100 stars(customizable and optional)
           /* for(var stars = 0; stars < 100; stars++){
                var circle = draw.circle(3, "white", "yellow", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle); 
            } */
            
            
           /* var moon = draw.bitmap("img/moon.png"); Lines 62-67 is for adding a moon image and then scaling it to the right size. *NOT USED IN PROJECT*
                moon.x = canvasWidth - 250; 
                moon.y = groundY - 350;
                moon.scaleX = 0.5;
                moon.scaleY = 0.5;
                background.addChild(moon); */
            
           
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {  //for loop to make 5 cat trees
                
                var newCatTree = draw.bitmap("img/NewCatTree.png"); //variable called newCatTree that holds a draw.bitmap function to add the cat tree img.
                newCatTree.x = 400 * i; //Placing the 5 cat trees
                newCatTree.y = groundY - 270; //Scaling the cat tree
                background.addChild(newCatTree); //Adding the image to the background.
                newCatTree.scaleX = 0.2; //Scaling the cat tree
                newCatTree.scaleY = 0.2; //Scaling the cat tree
                catTrees.push(newCatTree); //pushing the cat trees to the loop
              }
            
            // TODO 3: Part 1 - Add a tree
            
            /*tree = draw.bitmap("img/tree.png"); //Lines 85-90 is just to scale the tree size and some other stuff.
            tree.x = canvasWidth;
            tree.y = groundY - 225;
            background.addChild(tree);*/
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            
            
            // TODO 3: Part 2 - Move the tree!
           /* tree.x = tree.x - 3;

            if (tree.x < -200) {
            tree.x = canvasWidth; 
            } */
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < catTrees.length; i++) { //Lines 111-120 is a for loop to make the cat trees come to the player(players doesn't actually move forward)
                var catTree = catTrees[i];
              catTree.x = catTree.x - 1;
                // code to do something with each element
              if(catTree.x < -200){ //If statement declaring that if catTree.X is less than -200 put catTree.x at canvasWidth
                catTree.x = canvasWidth;
              }
            }

        }/* // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };   


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
    }
}
