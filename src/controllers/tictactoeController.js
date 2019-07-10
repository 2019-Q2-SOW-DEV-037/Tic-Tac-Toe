const Constants = require('../config/constants');

class TicTacToeController {

    constructor(turnOfPlayer, winSequences, gameOver) {
        this.turnOfPlayer = turnOfPlayer;
        this.winSequences = winSequences;
        this.gameOver = gameOver;
        this.movesOfPlayers = {
            X: [],
            O: []
        };
    }

    makeMove(gridBox) {
        if (!this.isSomethingFilledInTheBox(gridBox) && !this.gameOver) {
            this.whenClicksMarkSomething(gridBox);
            this.checkGameOver(gridBox.dataset.sequence);
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
        if (this.isTurnOfPlayerX()) {
            this.turnOfPlayer = Constants.PLAYER_O;
            return;
        }
        this.turnOfPlayer = Constants.PLAYER_X;
    }

    isTurnOfPlayerX() {
        return Constants.PLAYER_X === this.turnOfPlayer;
    }

    checkGameOver(boxMarked) {
        var moves = this.returnUpdatedMovesOfPlayer(boxMarked);
        if (this.isGameWonOrDraw(moves)) {
            this.gameOver = true;
        }
    }

    isGameWonOrDraw(moves) {
        return this.isPlayerMovesInRow(moves) || this.isAllBoxesFilled();
    }

    returnUpdatedMovesOfPlayer(boxMarked) {
        const moves = this.movesOfPlayers[this.turnOfPlayer];
        moves.push(boxMarked);
        return moves;
    }

    isPlayerMovesInRow(moves) {
        let movesMatchingWinSequence = Constants.RESET;
        for (let winSequence of this.winSequences) {
            for (let move of moves) {
                movesMatchingWinSequence = this.returnNumberOfMovesMatchingWinSequence(winSequence, move, movesMatchingWinSequence);
            }
            if (winSequence.length === movesMatchingWinSequence) {
                this.winningPlayer = this.turnOfPlayer;
                return true;
            }
            movesMatchingWinSequence = Constants.RESET;
        }
        return false;
    }

    returnNumberOfMovesMatchingWinSequence(winSequence, move, movesMatchingWinSequence) {
        if (this.isMoveFoundInWinSequence(winSequence, move)) {
            return ++movesMatchingWinSequence;
        }
        return movesMatchingWinSequence;
    }

    isMoveFoundInWinSequence(winSequence, move) {
        return -1 < winSequence.indexOf(move);
    }

    isAllBoxesFilled() {
        return Constants.MAX_NUMBER_OF_MOVES === (this.movesOfPlayers.X.length + this.movesOfPlayers.O.length);
    }
}

module.exports = TicTacToeController;