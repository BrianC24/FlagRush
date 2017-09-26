var app = angular.module("FlagApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");


    $stateProvider
        .state("home", {
            url: '/',
            templateUrl: "./views/home.html",
            controller: "homeController"
        })
        .state("game", {
            url: '/game',
            templateUrl: "./views/game.html",
            controller: "gameListController"
        })
            .state("liveGame", {
            url: '/live-game/:id',
            templateUrl: "./views/live-game.html",
            controller: "gameController"
        })

        .state("victory", {
            url: '/victory',
            templateUrl: "./views/victory.html",
            controller: "confettiController"
        })
        
            
               

})