angular
  .module("FlagApp")
  .factory("gameService", function ($http) {

    function createFlag() {
      return {
        type: "flag",
        rank: 0
      };
    }

    function createKing() {
      return {
        type: "king",
        rank: 6
      };
    }

    function createQueen() {
      return {
        type: "queen",
        rank: 5
      };
    }

    function createDuke() {
      return {
        type: "duke",
        rank: 4
      };
    }

    function createCount() {
      return {
        type: "count",
        rank: 3
      };
    }

    function createViscount() {
      return {
        type: "viscount",
        rank: 2
      };
    }

    function createKnight() {
      return {
        type: "knight",
        rank: 1
      };
    }


    function createEnemy() {
      var rank = Math.floor(Math.random() * (6 - 1)) + 1;
      return {
        type: "enemy",
        rank: rank
      };
    }

    return {
      createFlag: createFlag,
      createEnemy: createEnemy,
      createKing: createKing,
      createQueen: createQueen,
      createDuke: createDuke,
      createCount: createCount,
      createViscount: createViscount,
      createKnight: createKnight
    };
  });