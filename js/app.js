/*global document: false */
(function () {
    'use strict';
    function Board() {
        this.cross = '<img src="images/cross.png" alt="cross-icon">';
        this.naught = '<img src="images/nought.png" alt="game-icon">';
        this.crossesTurn = true;

        this.turn = function (space, boxes) {
            if (this.crossesTurn) {
                space.innerHTML = this.cross; // put image in the box
                space.dataset.piece = "cross"; // set its data attribute to cross
                this.crossesTurn = false; // naughts turn
                this.winState(boxes);
            } else {
                space.innerHTML = this.naught;
                space.dataset.piece = "naught";
                this.crossesTurn = true;
                this.winState(boxes);
            }
        };
        // series of checks on boxes with some crazy if statements...
        this.winState = function (boxes) {
            // check top row
            if (boxes[1].dataset.piece === boxes[0].dataset.piece
                    && boxes[1].dataset.piece === boxes[2].dataset.piece) {
                        alert('winner!!!');
            }
            // check middle row
            else if (boxes[4].dataset.piece === boxes[3].dataset.piece
                        && boxes[4].dataset.piece === boxes[5].dataset.piece) {
                            alert('Winner');
            }
            // check bottom row
            else if (boxes[7].dataset.piece === boxes[6].dataset.piece
                        && boxes[7].dataset.piece === boxes[8].dataset.piece) {
                            alert('winner');
            }
            // check left column
            else if (boxes[3].dataset.piece === boxes[0].dataset.piece
                        && boxes[3].dataset.piece === boxes[6].dataset.piece) {
                            alert('winner');
            }
            // check middle column
            else if (boxes[4].dataset.piece === boxes[1].dataset.piece
                        && boxes[4].dataset.piece === boxes[7].dataset.piece) {
                            alert('winner');
            }
            // check right column
            else if (boxes[5].dataset.piece === boxes[2].dataset.piece
                        && boxes[5].dataset.piece === boxes[8].dataset.piece) {
                            alert('winner');
            }
            // check diagonal left to right (splitting diag check into two to prevent super crazy IF)
            else if (boxes[4].dataset.piece === boxes[0].dataset.piece
                        && boxes[4].dataset.piece === boxes[8].dataset.piece) {
                            alert('winner');
            }
            // check diagonal right to left
            else if (boxes[4].dataset.piece === boxes[2].dataset.piece
                        && boxes[4].dataset.piece === boxes[6].dataset.piece) {
                            alert('winner');
            }
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        var gameContainer = document.querySelector('.game-container'),
            boxes = document.querySelectorAll('.box'),
            game = new Board();
            console.log(boxes);
        gameContainer.addEventListener('click', function (e) {
            var space = e.target;
            game.turn(space, boxes);

        });
    });
})();
