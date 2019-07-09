var TicTacToeController = require('../src/controllers/tictactoeController');
const Constants = require('../src/config/constants');

describe('TicTacToe game controller', () => {
    var tictactoeController;

    beforeEach(() => {
        tictactoeController = new TicTacToeController();
        tictactoeController.turnOfPlayer = 'X';
    });

    it('should mark X for the first move', () => {
        let gridBox = {
            innerText: ''
        };

        tictactoeController.whenClicksMarkSomething(gridBox);

        expect(gridBox.innerText).toBe('X');
    });

    it('should mark nothing if play on a played position', () => {
        let gridBox = {
            innerText: 'X'
        };
        tictactoeController.whenClicksMarkSomething = jasmine.createSpy();

        tictactoeController.makeMove(gridBox);

        expect(tictactoeController.whenClicksMarkSomething).not.toHaveBeenCalled();
    });

    it('should mark O if Player X has played last', () => {
        let gridBox = {
            innerText: ''
        };
        tictactoeController.turnOfPlayer = 'X';

        tictactoeController.changePlayerTurn();
        tictactoeController.whenClicksMarkSomething(gridBox);

        expect(gridBox.innerText).toBe('O');
    });

    it('should mark X if Player O has played last', () => {
        let gridBox = {
            innerText: ''
        };
        tictactoeController.turnOfPlayer = 'X';

        tictactoeController.changePlayerTurn();
        tictactoeController.whenClicksMarkSomething(gridBox);

        expect(gridBox.innerText).toBe('O');
    });

    it('should game over if player scores in a row', () => {
        tictactoeController.movesOfPlayers.X = ['1', '2'];
        tictactoeController.winSequences = Constants.WIN_SEQUENCES;

        tictactoeController.checkGameOver('3');

        expect(tictactoeController.gameOver).toBe(true);
    });
});