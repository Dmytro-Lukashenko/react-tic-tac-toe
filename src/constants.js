export const WINNING_COMBINATIONS = [
    [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 }
    ],
    [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 2 }
    ],
    [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
        { row: 2, col: 2 }
    ],
    [
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 }
    ],
    [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 2, col: 1 }
    ],
    [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
        { row: 2, col: 2 }
    ],
    [
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 }
    ],
    [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 2, col: 0 }
    ],

]

export const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export const PLAYERS = {
    "X": "Player1",
    "0": "Player2"
}