class TicTacToeController {

    constructor(turnOfPlayer) {
        this.turnOfPlayer = turnOfPlayer;
    }

    whenClicksMarkSomething(gridBox) {
        gridBox.innerText = this.turnOfPlayer;
    }
}

module.exports = TicTacToeController;