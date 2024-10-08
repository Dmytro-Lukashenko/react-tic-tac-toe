import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD } from "./constants";

export function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X'
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = '0';
    }
    return currentPlayer;
}

export function deriveWinner(players, gameBoard) {
    let winner = undefined;
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]

        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol];
        }
    }
    return winner;
}

export function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    return gameBoard;
}