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
            var tree;
            var catTrees = [];
 
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.bitmap("img/GalaxyBackground.png");
            background.addChild(backgroundFill);
            
            var groundFill = draw.rect(canvasWidth, canvasHeight, 'gray');
            
            groundFill.x = 4;
            groundFill.y = groundY;
            background.addChild(groundFill);
            
            // TODO 2: - Add a moon and starfield
           /* for(var stars = 0; stars < 100; stars++){
                var circle = draw.circle(3, "white", "yellow", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle); 
            } */
            
            
            var moon = draw.bitmap("img/moon.png"); //varible called moon is given to a draw function that draws a moon image
                moon.x = canvasWidth - 250;
                moon.y = groundY - 350;
                moon.scaleX = 0.5;
                moon.scaleY = 0.5;
                background.addChild(moon);
            
           
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {
                
                var newCatTree = draw.bitmap("img/NewCatTree.png");
                newCatTree.x = 400 * i;
                newCatTree.y = groundY - 270;
                background.addChild(newCatTree);
                newCatTree.scaleX = 0.2;
                newCatTree.scaleY = 0.2;
                catTrees.push(newCatTree);
              }
            
            // TODO 3: Part 1 - Add a tree
            
            /*tree = draw.bitmap("img/tree.png");
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
            for (var i = 0; i < catTrees.length; i++) {
                var catTree = catTrees[i];
              catTree.x = catTree.x - 1;
                // code to do something with each element
              if(catTree.x < -200){
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
