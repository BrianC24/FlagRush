# FlagRush
Simple board game web application to test user strategy.
Second Project to demonstrate knowledge of technologies: HTML, CSS, Bootstrap, JavaScript, Angular Js, jQuery, SQL Servers, MVC, C#, .NET.

### Framework 
The home page uses a parallax scrolling effect and informs the user about the board game rules. The navbar is on all pages and uses
angular (ui-routing) to navigate through the links.
Technologies used on the home page: Html, css, bootstrap, Angular Js.

The live page displays a table with 5 game rooms the user can join. The content of the table is displayed pulling from the backend using
a sql server. Each game room has a game state that is passed through the backend.
Technologies used on the live game list: Html, css, c#, sql server

The game page shows the current game state of the board game depending on the difficulty level the user selected. A user can place pieces
on the board and press the ready button to set the game state. Each time a piece is moved a http put request and updates the game state 
in the backend
Technologies used: html, css, javascript, c#, jquery, sql server, .Net, mvc framework

### Challenges 
1. Getting pieces to show movement on the site when the user clicks a certain piece and moves in on a new location.
2. Saving the users progress in the Sql Server database.

### Solution

1. Using ng-class and object model, each piece was assigned a type. Each type has an image assigned to it, those images were displayed on to the board using css. ng-class was used when a piece was selected and that css class displayed the image to the new location while the previous location was set to null.
2. The board gamme status was updated throught the game state in the database. Each time the user presses save progress a function was called to make an http request to update the database of the gamestate. So when the user goes back to the game it makes an http get request to display the current game state.

### What I would do differently 

Make sure to work on one problem at a time. I had a problem where i was trying to solve mutiple problems at once and it really slowed down productivity.
