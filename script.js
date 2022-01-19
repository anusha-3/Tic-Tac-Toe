window.addEventListener('DOMcontentLoaded', () => {
    const tiles = Array.from(document.querySelector('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    resetButton.addEventListener('click',resetBoard);
});