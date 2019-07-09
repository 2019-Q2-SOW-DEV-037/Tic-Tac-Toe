var TicTacToeController = require('../controllers/tictactoeController');
const Constants = require('../config/constants');

var tictactoeController = new TicTacToeController(Constants.INITIAL_TURN, Constants.WIN_SEQUENCES, false);

class TicTacToeView {

    constructor(gameResult) {
        this.gameResult = gameResult;
    }

    playGame() {
        this.renderGameLayout();
        this.handleClickInTheBox = this.handleClickInTheBox.bind(this);
        this.bindUserClickEventsWithGameLayout();
    }

    renderGameLayout() {
        document.body.innerHTML = '<div class="grid-container" id="grid"></div>';
        var element;
        for (let i = 1; i < 10; i++) {
            element = document.createElement('div');
            element.className = 'grid-item';
            element.dataset.sequence = i.toString();
            document.getElementById('grid').appendChild(element);
        }
    }

    bindUserClickEventsWithGameLayout() {
        for (let element of document.getElementsByClassName('grid-item')) {
            element.addEventListener('click', this.handleClickInTheBox, false);
        }
    }

    handleClickInTheBox(event) {
        tictactoeController.makeMove(event.target);
        this.showResultIfGameOver(tictactoeController.winningPlayer, tictactoeController.gameOver);
    }

    showResultIfGameOver(winningPlayer, gameOver) {
        if (gameOver && '' === this.gameResult) {
            this.gameResult = this.showResult(winningPlayer);
            document.body.appendChild(this.gameResult);
        }
    }

    showResult(winningPlayer) {
        let element = document.createElement('h1');
        let message = this.createMessage(winningPlayer);
        element.innerText = message;
        return element;
    }

    createMessage(winningPlayer) {
        return 'Winner is Player ' + winningPlayer;
    }
}

module.exports = TicTacToeView;