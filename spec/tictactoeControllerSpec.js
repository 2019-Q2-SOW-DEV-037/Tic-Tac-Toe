var TicTacToeController = require('../src/controllers/tictactoeController');

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
});