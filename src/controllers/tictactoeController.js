class TicTacToeController {

    constructor(turnOfPlayer) {
        this.turnOfPlayer = turnOfPlayer;
    }

    makeMove(gridBox) {
        if (!this.isSomethingFilledInTheBox(gridBox)) {
            this.whenClicksMarkSomething(gridBox);
        }
    }

    isSomethingFilledInTheBox(gridBox) {
        return '' !== gridBox.innerText;
    }

    whenClicksMarkSomething(gridBox) {
        gridBox.innerText = this.turnOfPlayer;
    }
}

module.exports = TicTacToeController;