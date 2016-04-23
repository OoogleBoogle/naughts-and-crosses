/*global alert*/
/*
TODO: change out alert boxes
TODO: Strikethrough on win
TODO: Add event listeners to multiple games
*/
// (function () {
    'use strict';
    function Board () {
        var gameContainer = document.querySelector('.game-container').cloneNode(true);
        gameContainer.classList.remove('hidden');
        document.querySelector('.full-container').appendChild(gameContainer);

        this.boxes = gameContainer.querySelectorAll('.box');
        this.cross = '<img src="images/cross.png" alt="cross-icon">';
        this.naught = '<img src="images/nought.png" alt="game-icon">';
        this.crossesTurn = true;
        this.gameWon = false;
        this.turns = 0;
        gameContainer.addEventListener('click', this.initialCheck.bind(this));
    }

    Board.prototype.initialCheck = function (e) {
        var space = e.target;
        // this check is so you cannot hit draw state by repeatedly clicking on a previously assigned space/box
        if (Number.isSafeInteger(parseInt(space.dataset.piece))) {
            this.turn(space, this.boxes);
        }
        if (this.gameWon) {
            this.reset(this.boxes);
        }
    }

    Board.prototype.turn = function (space, boxes) {
        this.turns++;
        if (this.crossesTurn) {
            space.innerHTML = this.cross; // put image in the box
            space.dataset.piece = 'cross'; // set its data attribute to cross
            this.winState(boxes); // check if it's a winning move
            this.crossesTurn = false; // naughts turn
        }
        else {
            space.innerHTML = this.naught;
            space.dataset.piece = 'naught';
            this.winState(boxes);
            this.crossesTurn = true;
        }
    }

    Board.prototype.winState = function (boxes) {
        // check top row
        if (boxes[1].dataset.piece === boxes[0].dataset.piece &&
            boxes[1].dataset.piece === boxes[2].dataset.piece) {
            this.celebrate();
        }
        // check middle row
        else if (boxes[4].dataset.piece === boxes[3].dataset.piece &&
                 boxes[4].dataset.piece === boxes[5].dataset.piece) {
            this.celebrate();
        }
        // check bottom row
        else if (boxes[7].dataset.piece === boxes[6].dataset.piece &&
                 boxes[7].dataset.piece === boxes[8].dataset.piece) {
            this.celebrate();
        }
        // check left column
        else if (boxes[3].dataset.piece === boxes[0].dataset.piece &&
                 boxes[3].dataset.piece === boxes[6].dataset.piece) {
            this.celebrate();
        }
        // check middle column
        else if (boxes[4].dataset.piece === boxes[1].dataset.piece &&
                 boxes[4].dataset.piece === boxes[7].dataset.piece) {
            this.celebrate();
        }
        // check right column
        else if (boxes[5].dataset.piece === boxes[2].dataset.piece &&
                 boxes[5].dataset.piece === boxes[8].dataset.piece) {
            this.celebrate();
        }
        // check diagonal top left to bottom right (splitting diag check into two to prevent super crazy IF)
        else if (boxes[4].dataset.piece === boxes[0].dataset.piece &&
                 boxes[4].dataset.piece === boxes[8].dataset.piece) {
            this.celebrate();
        }
        // check diagonal top right to bottom left
        else if (boxes[4].dataset.piece === boxes[2].dataset.piece &&
                 boxes[4].dataset.piece === boxes[6].dataset.piece) {
            this.celebrate();
        }
        // check for draw state
        else if (this.turns >= 9) {
            alert('draw');
            this.reset(boxes);
        }
    };

    Board.prototype.celebrate = function () {
        if (this.crossesTurn) {
            alert('Crosses Win');
        }
        else {
            alert('Naughts Win');
        }
        this.gameWon = true;
    };

    Board.prototype.reset = function (boxes) {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].dataset.piece = i;
            boxes[i].innerHTML = '';
        }
        this.turns = 0;
        this.gameWon = false;
    };

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#newGame').addEventListener('click', function () {
            var app = new Board;
        })
    });
// })();
