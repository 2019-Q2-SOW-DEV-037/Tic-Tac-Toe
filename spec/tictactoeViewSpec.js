const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;

var TicTacTocView = require('../src/views/tictactoeView');

describe("TicTacToe game view", () => {
    var tictactoeView;

    beforeEach(() => {
        tictactoeView = new TicTacTocView();
    });

    it("should show TicTacToe game layout", () => {
        tictactoeView.renderGameLayout();

        expect(document.body.innerHTML).not.toBe("");
    });
});