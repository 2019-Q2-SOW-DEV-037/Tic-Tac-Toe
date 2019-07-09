const Constants = require('../config/constants');

class TicTacToeController {

    constructor(turnOfPlayer) {
        this.turnOfPlayer = turnOfPlayer;
    }

    makeMove(gridBox) {
        if (!this.isSomethingFilledInTheBox(gridBox)) {
            this.whenClicksMarkSomething(gridBox);
            this.changePlayerTurn();
        }
    }

    isSomethingFilledInTheBox(gridBox) {
        return '' !== gridBox.innerText;
    }

    whenClicksMarkSomething(gridBox) {
        gridBox.innerText = this.turnOfPlayer;
    }

    changePlayerTurn() {
        if (Constants.PLAYER_X === this.turnOfPlayer) {
            this.turnOfPlayer = Constants.PLAYER_O;
            return;
        }
        this.turnOfPlayer = Constants.PLAYER_X;
    }
}

module.exports = TicTacToeController;