var TicTacToe = require('./views/tictactoeView');
var tictactoeView = new TicTacToe();

tictactoeView.renderGameLayout();
tictactoeView.bindUserClickEventsWithGameLayout();