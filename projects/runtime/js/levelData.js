var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 450, y: groundY - 130 },
          { type: "sawblade", x: 600, y: groundY - 120 },
          { type: "sawblade", x: 900, y: groundY - 120 },
          { type: "enemy", x: 900, y: groundY  }, //first enemy
          { type: "enemy2", x: 1200, y: groundY  },
          { type: "reward", x: 1000, y: groundY - 50 },
          { type: "marker", x: 1700, y: groundY - 50 },
        ],
        
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 600, y: groundY - 120 },
          { type: "sawblade", x: 800, y: groundY },
          { type: "sawblade", x: 1000, y: groundY - 120 },
          { type: "enemy3", x: 1000, y: groundY},
          { type: "enemy4", x: 1400, y: groundY},
          { type: "reward2", x: 1550, y: groundY - 50 },
          { type: "marker2", x: 2000, y: groundY - 50 },
        ],
      },
      {
        name: "Robot Rampage3",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 1000, y: groundY - 120 },
          { type: "sawblade", x: 1250, y: groundY },
          { type: "sawblade", x: 1400, y: groundY - 120 },
          { type: "enemy5", x: 1400, y: groundY},
          { type: "enemy6", x: 1600, y: groundY},
          { type: "reward3", x: 2000, y: groundY - 50 },
          { type: "marker3", x: 2500, y: groundY - 50 },
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
