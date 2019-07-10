const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

var TicTacTocView = require('../src/views/tictactoeView');

describe("TicTacToe game view", () => {
    var tictactoeView;

    beforeEach(() => {
        tictactoeView = new TicTacTocView('');
    });

    it('should show TicTacToe game layout', () => {
        tictactoeView.renderGameLayout();

        expect(document.body.innerHTML).not.toBe("");
    });

    it('should bind the user click events with grid boxes', () => {
        let element = document.createElement('div');
        element.className = 'grid-item';
        document.body.appendChild(element);
        element.addEventListener = jasmine.createSpy();

        tictactoeView.bindUserClickEventsWithGameLayout();

        expect(element.addEventListener).toHaveBeenCalledWith('click', tictactoeView.handleClickInTheBox, false);
    });

    it('should show message "Winner is Player X" if player X wins', () => {
        let winner = 'X',
            isGameOver = true;

        tictactoeView.showResultIfGameOver(winner, isGameOver);

        expect(tictactoeView.gameResult.innerText).toBe('Winner is Player X');
    });

    it('should show message "Winner is Player Y" if player O wins', () => {
        let winner = 'O',
            isGameOver = true;

        tictactoeView.showResultIfGameOver(winner, isGameOver);

        expect(tictactoeView.gameResult.innerText).toBe('Winner is Player O');
    });

    it('should show message "Game is a Draw" if no player wins and game over', () => {
        let winner = '',
            isGameOver = true;

        tictactoeView.showResultIfGameOver(winner, isGameOver);

        expect(tictactoeView.gameResult.innerText).toBe('Game is a Draw');
    });
});