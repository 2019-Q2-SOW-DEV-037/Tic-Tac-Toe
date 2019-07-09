var TicTacToeController = require('../controllers/tictactoeController');
const Constants = require('../config/constants');

var tictactoeController = new TicTacToeController(Constants.INITIAL_TURN);

class TicTacToeView {

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
        tictactoeController.whenClicksMarkSomething(event.target);
    }
}

module.exports = TicTacToeView;