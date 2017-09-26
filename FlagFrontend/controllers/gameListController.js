app.controller("gameListController", function ($scope, $http, $state, $stateParams, liveService, gameService) {

  function init() {
    liveService.getGames().then(function (response) {
      $scope.games = response;
      console.log($scope.games);
    })
  }

  $scope.instructionsModal = function () {
    $("#instructions").modal();
  };

  $scope.addGame = function () {
    var curGame = $scope.game;
    liveService.addGame(curGame.name, curGame.status)
      .then(init);
  }

  $scope.createGameState = function (id) {
    liveService.createGameState(id);
    var currentID = id;
  }

  //initialize
  init();
}); 