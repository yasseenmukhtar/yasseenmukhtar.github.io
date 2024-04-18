var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    //var groundY = game.groundY; //unused

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    
    function createSawBlade(x, y){  //function created called "sawblade" with paramters x and y to determine sawblade's location
      var hitZoneSize = 20; //The size of the hitzone is 20, 20 when hallebot hits it at this size something will happen
      var damageFromObstacle = 10; //This is the damage inflicted from the sawblade. In this case the damage inflicted is 10.
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //variable called "sawB;adeHitZone". This is holding a function called createObstacle, and it has parameters called "hitzone" and Damage from obstacle.
      sawBladeHitZone.x = x; //The saw blade hitzone is set to the x position of the sawblade. This isn't hardcoded.
      sawBladeHitZone.y = y; //The saw blade hitzone is set to the y position of the sawblade. This isn't hardcoded.
      game.addGameItem(sawBladeHitZone); //This function called "addgameItem" has one paramter called "sawBladeHitZone", and it will add the sawblade's hitzone/hitmarker.
      var obstacleImage = draw.bitmap("img/sawblade.png"); //This variable stores a draw.bitmap function, and it displays the actual sawblade's image.
      obstacleImage.x = -20 //This is used to put the obstacles position at this x value
      obstacleImage.y = -25 //This is used to put the obstacles position at this y value
      sawBladeHitZone.addChild(obstacleImage); //This function called "sawBladeHitZone.addChild(obstacleImage);" has one paramter called "obstacleImage", and it is used to add the "child" or the sawblade to the hitzone.
      sawBladeHitZone.rotationalVelocity = 10; //This line is just to make the image of the sawblade rotate for extra effects. the rotational velocity is set to 10.
    }
    
    function createEnemy(x, y){ //This function called "createEnemy" has two paramters, x and y, and the function is used to create the enemy at x and y position.
      var enemy = game.createGameItem("enemy", 25); //This variable called "enemy" stores a function called "createGameitem", and is used to create an enemy.
      var redSquare = draw.bitmap("img/madKat.png"); //This variable called "redSquare" stores a function called bitmap to display the image of the enemy.
      redSquare.x = -37; //This line is where I put the enemy at its x position on the canvas. It's at -37.
      redSquare.y = -25; //This line is where I put the enemy at its y position on the canvas. It's at -25.
      enemy.addChild(redSquare); //This function called addChild will add the cat image to the hitmarker.
      enemy.x = x; //Enemies x pos. (not hard coded.)
      enemy.y = y; //Enemies y pos. (not hard coded.)
      game.addGameItem(enemy); //This funcion called "addGameItem" has a paramter called "enemy", and it adds the enemy to the actual game.
      enemy.velocityX = -2; //This line is where I set the enemy's velocity. It's -2.
      redSquare.scaleX = 0.1; //This line is where I scales the size of the image to make it just right.
      redSquare.scaleY = 0.1; //This line is where I scales the size of the image to make it just right.
      enemy.onPlayerCollision = function () { 
      game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.
    
    };
    
      enemy.onProjectileCollision = function(){
        game.increaseScore(100); //Increases score to 100.
        //enemy.fadeOut();
        enemy.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
      }


    }
    
    function createEnemy2(x, y){ //This function called "createEnemy2" has two paramters, x and y, and the function is used to create the enemy at x and y position.
        var enemy2 = game.createGameItem("enemy", 25); //This variable called "enemy" stores a function called "createGameitem", and is used to create an enemy.
        var redSquare = draw.bitmap("img/madcatwalking2.png"); //This variable called "redSquare" stores a function called bitmap to display the image of the enemy.
        redSquare.x = -37; //This line is where I put the enemy at its x position on the canvas. It's at -37.
        redSquare.y = -25; //This line is where I put the enemy at its y position on the canvas. It's at -25.
        enemy2.addChild(redSquare); //This function called addChild will add the cat image to the hitmarker.
        enemy2.x = x; //Enemies x pos. (not hard coded.)
        enemy2.y = y; //Enemies y pos. (not hard coded.)
        game.addGameItem(enemy2); //This funcion called "addGameItem" has a paramter called "enemy", and it adds the enemy to the actual game.
        enemy2.velocityX = -2; //This line is where I set the enemy's velocity. It's -2.
        redSquare.scaleX = 0.1; //This line is where I scales the size of the image to make it just right.
        redSquare.scaleY = 0.1; //This line is where I scales the size of the image to make it just right.
        enemy2.onPlayerCollision = function () {
        game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.
    
    };
      enemy2.onProjectileCollision = function(){
        game.increaseScore(100); //Increase game score by 100
        //enemy.fadeOut();
        enemy2.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
      }


    }

    function createEnemy3(x, y){ //This function called "createEnemy3" has two paramters, x and y, and the function is used to create the enemy at x and y position.
      var enemy3 = game.createGameItem("enemy", 25); //This variable called "enemy3" stores a function called "createGameitem", and is used to create an enemy.
      var redSquare = draw.bitmap("img/madcat1.png"); //This variable called "redSquare" stores a function called bitmap to display the image of the enemy.
      redSquare.x = -37; //This line is where I put the enemy at its x position on the canvas. It's at -37.
      redSquare.y = -25; //This line is where I put the enemy at its y position on the canvas. It's at -25.
      enemy3.addChild(redSquare); //This function called addChild will add the cat image to the hitmarker.
      enemy3.x = x; //Enemies x pos. (not hard coded.)
      enemy3.y = y; //Enemies y pos. (not hard coded.)
      game.addGameItem(enemy3); //This funcion called "addGameItem" has a paramter called "enemy3", and it adds the enemy to the actual game.
      enemy3.velocityX = -2; //This line is where I set the enemy's velocity. It's -2.
      redSquare.scaleX = 0.2; //This line is where I scales the size of the image to make it just right.
      redSquare.scaleY = 0.2; //This line is where I scales the size of the image to make it just right.
      enemy3.onPlayerCollision = function () { 
      game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.
  
  };
    enemy3.onProjectileCollision = function(){
      game.increaseScore(100); //Increase game score by 100
      //enemy.fadeOut();
      enemy3.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
    }


  }
     
    function createEnemy4(x, y){ //This function called "createEnemy4" has two paramters, x and y, and the function is used to create the enemy at x and y position.
      var enemy4 = game.createGameItem("enemy", 25); //This variable called "enemy3" stores a function called "createGameitem", and is used to create an enemy.
      var redSquare = draw.bitmap("img/madcat2.png"); //This variable called "redSquare" stores a function called bitmap to display the image of the enemy.
      redSquare.x = -37; //This line is where I put the enemy at its x position on the canvas. It's at -37.
      redSquare.y = -25; //This line is where I put the enemy at its y position on the canvas. It's at -25.
      enemy4.addChild(redSquare); //This function called addChild will add the cat image to the hitmarker.
      enemy4.x = x; //Enemies x pos. (not hard coded.)
      enemy4.y = y; //Enemies y pos. (not hard coded.)
      game.addGameItem(enemy4); //This funcion called "addGameItem" has a paramter called "enemy3", and it adds the enemy to the actual game.
      enemy4.velocityX = -2; //This line is where I set the enemy's velocity. It's -2.
      redSquare.scaleX = 0.2; //This line is where I scales the size of the image to make it just right.
      redSquare.scaleY = 0.2; //This line is where I scales the size of the image to make it just right.
      enemy4.onPlayerCollision = function () {
      game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.

  };
    enemy4.onProjectileCollision = function(){
      game.increaseScore(100); //Increase game score by 100
      //enemy.fadeOut();
      enemy4.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
    }


}

    function createEnemy5(x, y){ //This function called "createEnemy5" has two paramters, x and y, and the function is used to create the enemy at x and y position.
      var enemy5 = game.createGameItem("enemy", 25); //This variable called "enemy3" stores a function called "createGameitem", and is used to create an enemy.
      var redSquare = draw.bitmap("img/enemy5.png"); //This variable called "redSquare" stores a function called bitmap to display the image of the enemy.
      redSquare.x = -37; //This line is where I put the enemy at its x position on the canvas. It's at -37.
      redSquare.y = -25; //This line is where I put the enemy at its y position on the canvas. It's at -25.
      enemy5.addChild(redSquare); //This function called addChild will add the cat image to the hitmarker. 
      enemy5.x = x; //Enemies x pos. (not hard coded.)
      enemy5.y = y; //Enemies y pos. (not hard coded.)
      game.addGameItem(enemy5); //This funcion called "addGameItem" has a paramter called "enemy3", and it adds the enemy to the actual game.
      enemy5.velocityX = -2; //This line is where I set the enemy's velocity. It's -2.
      redSquare.scaleX = 0.3; //This line is where I scales the size of the image to make it just right. 
      redSquare.scaleY = 0.3; //This line is where I scales the size of the image to make it just right.
      enemy5.onPlayerCollision = function () {
      game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.


    };
    enemy5.onProjectileCollision = function(){
      game.increaseScore(100); //Increase game score by 100
      //enemy.fadeOut();
      enemy5.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
    }


    }


    function createReward(x, y){ //Function called "createReward" with two parameters, x and y.
      var reward = game.createGameItem("enemy", 25); //This variable called "reward" stores a function called "createGameitem", and is used to create an reward.
      var blueSquare = draw.bitmap('img/CatTreat.png'); //This variable called "blueSquare" stores a function called bitmap to display the image of the reward.
      blueSquare.x = -45; //This line is where I put the reward at its x position on the canvas. It's at 45.
      blueSquare.y = -45; //This line is where I put the reward at its y position on the canvas. It's at -45.
      reward.addChild(blueSquare); //This function called addChild will add the cat treat image to the hitmarker.
      reward.x = x; //Reward x pos. (not hard coded.)
      reward.y = y; //Reward y pos. (not hard coded.)
      game.addGameItem(reward); //This funcion called "addGameItem" has a paramter called "reward", and it adds the reward to the actual game.
      reward.velocityX = -2; //This line is where I set the reward's velocity. It's -2.
      blueSquare.scaleX = 0.25; //This line is where I scales the size of the image to make it just right. 
      blueSquare.scaleY = 0.25; //This line is where I scales the size of the image to make it just right. 
      reward.onPlayerCollision = function () {
      game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.
      game.increaseScore(200); //Increase game score by 200.
        reward.shrink(); //Shrinks reward when touched.
    };
    
      reward.onProjectileCollision = function(){
        game.increaseScore(100); //Increase game score by 100.
        //reward.fadeOut();
        reward.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
      }


    }
    
      function createReward2(x, y){ //Function called "createReward2" with two parameters, x and y.
        var reward2 = game.createGameItem("enemy", 25); //This variable called "reward2" stores a function called "createGameitem", and is used to create an reward.
        var blueSquare = draw.bitmap('img/BallOfYarn.png'); //This variable called "blueSquare" stores a function called bitmap to display the image of the reward.
        blueSquare.x = -45; //This line is where I put the reward at its x position on the canvas. It's at -45.
        blueSquare.y = -45; //This line is where I put the reward at its y position on the canvas. It's at -45.
        reward2.addChild(blueSquare); //This funcion called "addGameItem" has a paramter called "reward2", and it adds the reward to the actual game.
        reward2.x = x; //Reward x pos. (not hard coded.)
        reward2.y = y; //Reward y pos. (not hard coded.)
        game.addGameItem(reward2);  //This funcion called "addGameItem" has a paramter called "reward", and it adds the reward to the actual game.
        reward2.velocityX = -2; //This line is where I set the reward's velocity. It's -2.
        blueSquare.scaleX = 0.2; //This line is where I scales the size of the image to make it just right. 
        blueSquare.scaleY = 0.2; //This line is where I scales the size of the image to make it just right. 
        reward2.onPlayerCollision = function () {
        game.changeIntegrity(-15); //This is where I set the damage of the enemy to inflict 15 damage on collsion.
        game.increaseScore(200); //Increase game score by 200.
          reward2.shrink(); //Shrinks reward when touched.
        };
      
      
        reward2.onProjectileCollision = function(){
          game.increaseScore(100); //Increase game score by 100.
          //reward.fadeOut();
          reward2.flyTo(0, 0); //Function called "flyTo" with two paramters, 0 and 0. Those are the x & y positions.
        }


      }
      
    
    function createMarker(x, y){ //Function called "createMarker" with two parameters, x and y.
      var marker = game.createGameItem("enemy", 25); //This variable called "reward2" stores a function called "createGameitem", and is used to create an reward.
      var yellowSquare = draw.rect(50, 50, "yellow"); //This variable called "yellowSquare" stores a function called draw to display the image of the marker.
      yellowSquare.x = -25; //This line is where I put the reward at its x position on the canvas. It's at -25.
      yellowSquare.y = -25; //This line is where I put the reward at its x position on the canvas. It's at -45.
      marker.addChild(yellowSquare); //This funcion called "addGameItem" has a paramter called x and y, and it adds the reward to the actual game.
      marker.x = x; //Marker x pos. (not hard coded.)
      marker.y = y; //marker y pos. (not hard coded.)
      game.addGameItem(marker); //This funcion called "addGameItem" has a paramter called "reward", and it adds the reward to the actual game.
      marker.velocityX = -2; //This line is where I set the marker's velocity. It's -2.
    
      marker.onPlayerCollision = function () {
        game.changeIntegrity(100); //Increase game score by 100.
        game.increaseScore(150); //Increase game score by 150.
        startLevel();
        marker.shrink();
      };
    }
    

    function createMarker2(x, y){ //Function called "createMarker2" with two parameters, x and y.
      var marker2 = game.createGameItem("enemy", 25); //This variable called "marker2" stores a function called "createGameitem", and is used to create an reward.
      var yellowSquare = draw.rect(50, 50, "yellow"); //This variable called "yellowSquare" stores a function called draw to display the image of the marker.
      yellowSquare.x = -25; //This line is where I put the reward at its x position on the canvas. It's at -25.
      yellowSquare.y = -25; //This line is where I put the reward at its y position on the canvas. It's at -25.
      marker2.addChild(yellowSquare); //This funcion called "addGameItem" has a paramter called x and y, and it adds the reward to the actual game.
      marker2.x = x; //Marker x pos. (not hard coded.)
      marker2.y = y; //Marker y pos. (not hard coded.)
      game.addGameItem(marker2);  //This funcion called "addGameItem" has a paramter called "marker2", and it adds the reward to the actual game.
      marker2.velocityX = -2; //This line is where I set the marker's velocity. It's -2.
    
      marker2.onPlayerCollision = function () {
        game.changeIntegrity(100);  //Increase game score by 100.
        game.increaseScore(150);  //Increase game score by 150.
        startLevel();
        marker2.shrink();
      };
    }
    

    function createMarker3(x, y){ //Function called "createMarker2" with two parameters, x and y.
      var marker3 = game.createGameItem("enemy", 25); //Function called "createMarker2" with two parameters, x and y.
      var yellowSquare = draw.rect(50, 50, "yellow"); //This variable called "yellowSquare" stores a function called draw to display the image of the marker.
      yellowSquare.x = -25; //This line is where I put the reward at its x position on the canvas. It's at -25.
      yellowSquare.y = -25; //This line is where I put the reward at its y position on the canvas. It's at -25.
      marker3.addChild(yellowSquare); //This funcion called "addGameItem" has a paramter called x and y, and it adds the reward to the actual game.
      marker3.x = x; //Marker x pos. (not hard coded.)
      marker3.y = y; //Marker y pos. (not hard coded.)
      game.addGameItem(marker3);  //This funcion called "addGameItem" has a paramter called "marker2", and it adds the reward to the actual game.
      marker2.velocityX = -2; //This line is where I set the marker's velocity. It's -2. 
      marker3.velocityX = -2;  //This funcion called "addGameItem" has a paramter called "marker2", and it adds the reward to the actual game.
      marker2.velocityX = -2; //This line is where I set the marker's velocity. It's -2.
    
      marker3.onPlayerCollision = function () {
        game.changeIntegrity(100);  //Increase game score by 100.
        game.increaseScore(150); //Increase game score by 150.
        startLevel();
        marker3.shrink();
      };
    }
    function startLevel() { //function called start level. this is going to be used to tart a whole new level when the marker is touched
      // TODO 13 goes below here
      var level = levelData[currentLevel]; //variable called "level" i keeps track of your current level
      var levelObjects = level.gameItems //Another variable, the name of the variable is "levelObjects", and it keeep strack of the objects that are in thst certain level.
      for(var i = 0; i < levelObjects.length; i++){ //for loop to keep track of the different objects
        var element = levelObjects[i];
        if(element.type === 'sawblade'){      //lines 287-289 is an if statment that has a function that creates a sawblade
          createSawBlade(element.x, element.y);  
        }
      
    
        if(element.type === 'enemy'){          //lines 292-294 is an if statment that has a function that creates a enemy
          createEnemy(element.x, element.y);   
        }
      
        if(element.type === 'enemy2'){        //lines 296-298 is an if statment that has a function that creates a enemy2
          createEnemy2(element.x, element.y);
        }
        
        if(element.type === 'enemy3'){         //lines 300-302 is an if statment that has a function that creates a enemy3
          createEnemy3(element.x, element.y);
        }
        
        if(element.type === 'enemy4'){         //lines 304-306 is an if statment that has a function that creates a enemy4
          createEnemy4(element.x, element.y);
        }
        
        if(element.type === 'enemy5'){          //lines 308-310 is an if statment that has a function that creates a enemy5
          createEnemy5(element.x, element.y);
        }
        
        if(element.type === 'reward'){          //lines 312-314 is an if statment that has a function that creates a reward
          createEnemy5(element.x, element.y);
          createReward(element.x, element.y);
        }
        
        if(element.type === 'reward2'){         //lines 317-319 is an if statment that has a function that creates a reward2
          createReward2(element.x, element.y);
        }

        if(element.type === 'marker'){           //lines 321-323 is an if statment that has a function that creates a marker
          createMarker(element.x, element.y);
        }
        
        if(element.type === 'marker2'){           //lines 325-373 is an if statment that has a function that creates a marker2
          createMarker2(element.x, element.y);
        }
        
        if(element.type === 'marker3'){           //lines 329-331 is an if statment that has a function that creates a marker3
          createMarker3(element.x, element.y);
        }
      }


    //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
