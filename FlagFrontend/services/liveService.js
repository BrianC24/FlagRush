angular
  .module("FlagApp")
  .service("liveService", function ($http, $q) {

    var _games = [];
    var _this = this;

    function Games(id, name, status) {
      this.id = id;
      this.name = name;
    }

    //displays all the rooms available in the list of games page
    this.getGames = function () {
      var deferred = $q.defer();

      $http.get("http://localhost:58268/api/GameList")
        .then(function (response) {
          _games = response.data.gamesList
          deferred.resolve(_games);
        },
        function (error) {
          console.log(error);
          deferred.reject(error);
        });


      return deferred.promise;
    }

    // grabs a room by id to set which gamestate it will have
    this.getGameById = function (id) {
      return $http({
        url: "http://localhost:58268/api/GameList/getRoom",
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          id: id
        }

      });
    }

    this.addGame = function (name, status) {
      gameRoom = {
        Name: name,
        Status: status
      }
      return $http.post("http://localhost:58268/api/GameList/newRoom", gameRoom);

    }

    // sets the gamestate for the current room
    this.createGameState = function (id) {
      $http.put("http://localhost:58268/api/GameList/joinRoom?id=" + id);
    }

    // updates and save current gamestate of the room 
    this.saveGameState = function (id, gameState) {
      console.log(id);
      console.log(gameState);
      $http({
        url: "http://localhost:58268/api/GameList/updateRoom",
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          id: id,
          gameState: JSON.stringify(gameState)
        }
      });
      console.log("updating");
    }

  });