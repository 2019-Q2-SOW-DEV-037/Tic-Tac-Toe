const Constants = {
    INITIAL_TURN: 'X',
    PLAYER_X: 'X',
    PLAYER_O: 'O',
    WIN_SEQUENCES: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7'],
    ],
    MAX_NUMBER_OF_MOVES: 9,
    RESET: 0
};

module.exports = Constants;