var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [ //An object called levelData holds different values and key-pairs
      {
        name: "Robot Romp", //The name, "Robot Romp"
        number: 1, //The level number. In this case it's 1
        speed: -3, //The speed in which everything is moving in the level
        gameItems: [ //Introducing what the things below are(game items).
          { type: "sawblade", x: 450, y: groundY - 130 }, //Saw blade #1 x pos = 450, y pos = groundY - 120.
          { type: "sawblade", x: 600, y: groundY - 120 }, //Saw blade #2 x pos = 600, y pos = groundY - 120.
          { type: "sawblade", x: 900, y: groundY - 120 }, //Saw blade #3 x pos = 900, y pos = groundY - 120.
          { type: "enemy", x: 900, y: groundY  }, //first enemy in level 1. X pos = 900, y pos = groundY
          { type: "enemy2", x: 1200, y: groundY  }, //second enemy in level 1. X pos = 1200, y pos = groundY
          { type: "reward", x: 1000, y: groundY - 50 }, //Reward in level 1. X pos = 1000, y pos = groundY - 50.
          { type: "marker", x: 1700, y: groundY - 50 }, //Marker that the player collides with to move to level 2. X pos = 1700, y pos = groundY -50.
        ],
        
      },
      {
        name: "Robot Rampage", //The name, "Robot Rampage"
        number: 2, //Level Number, 2.
        speed: -3, //Speed of objects in level 2.
        gameItems: [ //Introducing what the things below are(game items).
          { type: "sawblade", x: 600, y: groundY - 120 }, //Saw blade #1 x pos = 600, y pos = groundY - 120.
          { type: "sawblade", x: 800, y: groundY }, //Saw blade #2 x pos = 800, y pos = groundY.
          { type: "sawblade", x: 1000, y: groundY - 120 },  //Saw blade #3 x pos = 1000, y pos = groundY - 120. 
          { type: "enemy3", x: 1000, y: groundY}, //first enemy in level 2. X pos = 1000, y pos = groundY
          { type: "enemy4", x: 1400, y: groundY}, //seond enemy in level 2. X pos = 1000, y pos = groundY
          { type: "reward2", x: 1550, y: groundY - 50 }, //Reward2, level 2. x pos = 1550, y pos = grounY - 50
          { type: "marker2", x: 2000, y: groundY - 50 }, //marker2, level 2. x pos = 2000, y pos = grounY - 50
        ],
      },
      {
        name: "Robot Rampage3", //Name: "Robot Rampage3"
        number: 3, //Level 3
        speed: -3, //Speed of objects in level 3
        gameItems: [
          { type: "sawblade", x: 1000, y: groundY - 120 }, //Saw blade #1 x pos = 1000, y pos = groundY - 120.
          { type: "sawblade", x: 1250, y: groundY }, //Saw blade #2 x pos = 1250, y pos = groundY.
          { type: "sawblade", x: 1400, y: groundY - 120 }, //Saw blade #3 x pos = 1400, y pos = groundY - 120.
          { type: "enemy5", x: 1400, y: groundY}, //first enemy of level 3. x pos = 1400, y pos = groundY - 120.
          { type: "enemy6", x: 1600, y: groundY}, //second enemy of level 3(not added)
          { type: "reward3", x: 2000, y: groundY - 50 }, //Reward in level 3. x pos = 2000, y pos = groundY - 50.
          { type: "marker3", x: 2500, y: groundY - 50 }, //marker in level 3. Does not send to level 4.
        ],
      },
    
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
