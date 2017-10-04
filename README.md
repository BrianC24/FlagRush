# FlagRush
Simple board game web application to test user strategy.

### Home Page

The home page uses a parallax scrolling effect and informs the user about the board game rules. The navbar is on all pages and uses
angular (ui-routing) to navigate through the links.

Technologies used on the home page: Html, css, bootstrap, Angular Js.

### Live Games Page

The live page displays a table with 5 game rooms the user can join. The content of the table is displayed pulling from the backend using
a sql server. Each game room has a game state that is passed through the backend.

Technologies used on the live game list: Html, css, c#, sql server

### Game page

The game page shows the current game state of the board game depending on the difficulty level the user selected. A user can place pieces
on the board and press the ready button to set the game state. Each time a piece is moved a http put request and updates the game state 
in the backend

Technologies used: html, css, javascript, c#, jquery(modal for instructions button), sql server, .Net, mvc framework
