app.controller("gameController",
    function ($scope, $state, $stateParams, gameService, liveService, $stateParams) {
        $scope.board = [];
        $scope.currentGameId = $stateParams.id;
        $scope.ready = false;
        var levelId = {
            easy: 12,
            medium: 13,
            hard: 14,
            expert: 16,
            insane: 17
        };

        // Resets the board to its original state  -
        $scope.reset = function () {
            if ($scope.currentGameId == levelId.easy) {
                $scope.board = [];
                $scope.createBoard1();
            }
            else if ($scope.currentGameId == levelId.medium) {
                $scope.board = [];
                $scope.mediumBoard();
            }
            else if ($scope.currentGameId == levelId.hard) {
                $scope.board = [];
                $scope.hardBoard();
            }
            else if ($scope.currentGameId == levelId.expert) {
                $scope.board = [];
                $scope.expertBoard();
            }
            else if ($scope.currentGameId == levelId.insane) {
                $scope.board = [];
                $scope.insaneBoard();
            }
        }

        /// if a room is created throught the backend when join is clicked it gives it a preset state that can be edited depending on the board
        function init() {
            liveService.getGameById($scope.currentGameId).then(function (response) {
                var data = response.data;
                if (data && data.gameState) {
                    $scope.board = JSON.parse(data.gameState);
                }
                else {
                    // $scope.createBoard1();
                    //$scope.mediumBoard();
                    // $scope.expertBoard();
                    $scope.insaneBoard();
                }
            }).catch(function () {
                console.log("some error in getting game");
            });
        }

        $scope.instructionsModal = function () {
            $("#instructions").modal();
        };

        //saves the current gamestate of the board to the database
        $scope.saveGameState = function (id) {
            console.log(id);
            console.log($scope.currentGameId);
            liveService.saveGameState($scope.currentGameId, $scope.board);
        }

        // creates my pieces and board levels 
        $scope.pieces = {
            flag: "flag",
            king: "king",
            queen: "queen",
            duke: "duke",
            count: "count",
            viscount: "viscount",
            knight: "knight"
        };

        $scope.flagCounter = 1;
        $scope.kingCounter = 2;
        $scope.queenCounter = 2;
        $scope.dukeCounter = 2;
        $scope.countCounter = 2;
        $scope.viscountCounter = 2;
        $scope.knightCounter = 2;

        $scope.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

        $scope.selectedPiece = "";

        $scope.createBoard1 = function () {
            var cols = 9;
            var rows = 8;

            for (var i = 0; i < rows; i++) {
                var newRow = [];
                for (var j = 0; j < cols; j++) {
                    var item = {};

                    if (i === 2) {
                        item = gameService.createEnemy();
                        console.log("enemy created")
                    }
                    else {
                        item = { type: "empty" }
                    }
                    item.row = i;
                    item.col = j;

                    newRow.push(item);
                }
                $scope.board.push(newRow);
            }
        };

        $scope.mediumBoard = function () {
            var cols = 9;
            var rows = 8;

            for (var i = 0; i < rows; i++) {
                var newRow = [];
                for (var j = 0; j < cols; j++) {
                    var item = {};

                    if (i === 0) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 2) {
                        item = gameService.createEnemy();
                    }
                    else {
                        item = { type: "empty" }
                    }
                    item.row = i;
                    item.col = j;

                    newRow.push(item);
                }
                $scope.board.push(newRow);
            }
            console.log($scope.board);
        };

        $scope.hardBoard = function () {
            var cols = 9;
            var rows = 8;

            for (var i = 0; i < rows; i++) {
                var newRow = [];
                for (var j = 0; j < cols; j++) {
                    var item = {};

                    if (i === 0) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 2) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 1) {
                        item = gameService.createEnemy();
                    }
                    else {
                        item = { type: "empty" }
                    }
                    item.row = i;
                    item.col = j;

                    newRow.push(item);
                }
                $scope.board.push(newRow);
            }
        };

        $scope.expertBoard = function () {
            var cols = 9;
            var rows = 8;

            for (var i = 0; i < rows; i++) {
                var newRow = [];
                for (var j = 0; j < cols; j++) {
                    var item = {};

                    if (i === 0) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 2) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 3) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 1) {
                        item = gameService.createEnemy();
                    }
                    else {
                        item = { type: "empty" }
                    }
                    item.row = i;
                    item.col = j;

                    newRow.push(item);
                }
                $scope.board.push(newRow);
            }
        };

        $scope.insaneBoard = function () {
            var cols = 9;
            var rows = 8;

            for (var i = 0; i < rows; i++) {
                var newRow = [];
                for (var j = 0; j < cols; j++) {
                    var item = {};

                    if (i === 0) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 2) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 3) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 1) {
                        item = gameService.createEnemy();
                    }
                    else if (i === 4) {
                        item = gameService.createEnemy();
                    }
                    else {
                        item = { type: "empty" }
                    }
                    item.row = i;
                    item.col = j;

                    newRow.push(item);
                }
                $scope.board.push(newRow);
            }
        };

        // Selects piece to put on board
        $scope.selectPiece = function (type) {
            if (type == $scope.pieces.flag) {
                $scope.selectedPiece = gameService.createFlag();
            }
            else if (type == $scope.pieces.king) {
                $scope.selectedPiece = gameService.createKing();
            }
            else if (type == $scope.pieces.queen) {
                $scope.selectedPiece = gameService.createQueen();
            }
            else if (type == $scope.pieces.duke) {
                $scope.selectedPiece = gameService.createDuke();
            }
            else if (type == $scope.pieces.count) {
                $scope.selectedPiece = gameService.createCount();
            }
            else if (type == $scope.pieces.viscount) {
                $scope.selectedPiece = gameService.createViscount();
            }
            else if (type == $scope.pieces.knight) {
                $scope.selectedPiece = gameService.createKnight();
            }
            console.log($scope.selectedPiece)
        };

        // gets the type of piece so that the correct piece is placed on the board when clicked
        function getPieceType(row, col) {
            return $scope.board[row][col].type;
        }

        // Puts selected piece on board
        $scope.boardClick = function (row, col) {
            console.log(row, col);
            if (!$scope.ready) {
                putPiece(row, col);
            }
            else {
                if (getPieceType(row, col) !== "enemy" && getPieceType(row, col) !== "empty") {
                    setPiece(row, col);
                }
                else if (getPieceType(row, col) == "enemy") {
                    $scope.battle(row, col);
                }
                else {
                    movePiece(row, col);
                }
            }
        };

        $scope.battle = function (row, col) {
            selectedPiece = $scope.board[row][col];
            console.log(selectedPiece.rank);
            var enemyPiece = selectedPiece;
            var playerPiece = $scope.currentPiece.piece;

            // checks if the enemy piece selected is in next row or col
            if ((($scope.currentPiece.row + 1 == row || $scope.currentPiece.row - 1 == row) && ($scope.currentPiece.col == col)) || (($scope.currentPiece.col + 1 == col || $scope.currentPiece.col - 1 == col) && ($scope.currentPiece.row == row))) {
                // enemy piece wins 
                if (enemyPiece.rank == playerPiece.rank) {
                    console.log("equals");
                    createEmptyAtCurrentPiece()
                    $scope.board[row][col] = { type: "empty" };
                    alert("Both piece eliminated");
                }
                // draw both piece eliminated
                else if (enemyPiece.rank > playerPiece.rank) {
                    createEmptyAtCurrentPiece()
                    alert("Enemy piece wins that battle");
                    // your piece wins 
                }
                else if (enemyPiece.rank < playerPiece.rank) {
                    putPiece(row, col);
                    alert("Your piece wins that battle");
                }
            }
        }

        // Sets the player to be ready can no longer put pieces on board
        $scope.playerReady = function () {
            $scope.ready = true;
            currentPiece = null;
        }

        $scope.currentPiece = null;

        // Selects the current piece to be moved
        var setPiece = function (row, col) {
            console.log("setting piece")
            $scope.currentPiece = {
                piece: $scope.board[row][col],
                row: row,
                col: col
            };
        }

        // Moves the selected piece to the new location row and col that is clicked on the board
        var movePiece = function (row, col) {
            console.log("moving piece")
            if (!$scope.currentPiece) {
                return;
            }
            var currentRow = $scope.currentPiece.row;
            var currentCol = $scope.currentPiece.col;

            if (((currentRow + 1 == row || currentRow - 1 == row) && (currentCol == col)) || ((currentCol + 1 == col || currentCol - 1 == col) && (currentRow == row))) {
                putPiece(row, col);
            }
            else {
                alert("Can't move piece here.")
            }
            $scope.currentPiece = null;
        }

        // if player is ready it uses move logic to move pieces on the board
        var putPiece = function (row, col) {
            if ($scope.ready) {
                moveLogic(row, col);
            }
            else {
                if (row >= 5) {
                    placementLogic(row, col);
                }
                else {
                    alert("Can't Place piece here.")
                }
            }
        }

        //moves pieces on the board
        var moveLogic = function (row, col) {
            console.log("moving it");
            var piece = $scope.currentPiece.piece;
            createEmptyAtCurrentPiece();
            $scope.board[row][col] = piece;
            $scope.victory();
        }

        //sets the previous location of piece back to empty 
        var createEmptyAtCurrentPiece = function () {
            $scope.board[$scope.currentPiece.row][$scope.currentPiece.col] = { type: "empty" };
            $scope.currentPiece = null;
        }

        //places pieces on the board
        var placementLogic = function (row, col) {
            var currentLocation = $scope.board[row][col]
            if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.flag && $scope.flagCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.flagCounter -= 1;
            }
            else if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.king && $scope.kingCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.kingCounter -= 1;
            }
            else if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.queen && $scope.queenCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.queenCounter -= 1;
            }
            else if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.duke && $scope.dukeCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.dukeCounter -= 1;
            }
            else if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.count && $scope.countCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.countCounter -= 1;
            }
            else if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.viscount && $scope.viscountCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.viscountCounter -= 1;
            }
            else if (currentLocation.type == "empty" && $scope.selectedPiece.type === $scope.pieces.knight && $scope.knightCounter > 0) {
                $scope.board[row][col] = $scope.selectedPiece;
                $scope.knightCounter -= 1;
            }
        }

        // runs when the player flag reaches the last row, automatically resets the board.
        $scope.victory = function () {
            console.log($scope.board[0][0].type);
            for (var i = 0; i < 9; i++) {
                if ($scope.board[0][i].type == "flag") {
                    $scope.reset();
                    $state.go("victory");
                    location.reload();
                }
            }
        }
        init();
    }
); 