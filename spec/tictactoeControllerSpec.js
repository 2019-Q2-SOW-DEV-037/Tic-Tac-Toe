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
});