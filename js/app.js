(function () {
    'use strict';
    function Board() {
        this.cross = '<img src="images/cross.png" alt="cross-icon">';
        this.naught = '<img src="images/nought.png" alt="game-icon">';
        this.crossesTurn = true;
        this.gameWon = false;
        this.turns = 0;

        this.turn = function (space, boxes) {
            this.turns++
            if (this.crossesTurn) {
                space.innerHTML = this.cross; // put image in the box
                space.dataset.piece = "cross"; // set its data attribute to cross
                this.winState(boxes); // check if it's a winning move
                this.crossesTurn = false; // naughts turn
            } else {
                space.innerHTML = this.naught;
                space.dataset.piece = "naught";
                this.winState(boxes);
                this.crossesTurn = true;
            }
        };

        this.celebrate = function () {
            if (this.crossesTurn) {
                alert('Crosses Win');
            } else {
                alert('Naughts Win');
            }
            this.gameWon = true;
        };

        this.reset = function(boxes) {
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].dataset.piece = i;
                boxes[i].innerHTML = "";
            }
            this.turns = 0;
            this.gameWon = false;
        };

        // series of checks on boxes with some crazy if statements...
        this.winState = function (boxes) {
            // check top row
            if (boxes[1].dataset.piece === boxes[0].dataset.piece
                    && boxes[1].dataset.piece === boxes[2].dataset.piece) {
                            this.celebrate();
            }
            // check middle row
            else if (boxes[4].dataset.piece === boxes[3].dataset.piece
                        && boxes[4].dataset.piece === boxes[5].dataset.piece) {
                            this.celebrate();
            }
            // check bottom row
            else if (boxes[7].dataset.piece === boxes[6].dataset.piece
                        && boxes[7].dataset.piece === boxes[8].dataset.piece) {
                            this.celebrate();
            }
            // check left column
            else if (boxes[3].dataset.piece === boxes[0].dataset.piece
                        && boxes[3].dataset.piece === boxes[6].dataset.piece) {
                            this.celebrate();
            }
            // check middle column
            else if (boxes[4].dataset.piece === boxes[1].dataset.piece
                        && boxes[4].dataset.piece === boxes[7].dataset.piece) {
                            this.celebrate();
            }
            // check right column
            else if (boxes[5].dataset.piece === boxes[2].dataset.piece
                        && boxes[5].dataset.piece === boxes[8].dataset.piece) {
                            this.celebrate();
            }
            // check diagonal left to right (splitting diag check into two to prevent super crazy IF)
            else if (boxes[4].dataset.piece === boxes[0].dataset.piece
                        && boxes[4].dataset.piece === boxes[8].dataset.piece) {
                            this.celebrate();
            }
            // check diagonal right to left
            else if (boxes[4].dataset.piece === boxes[2].dataset.piece
                        && boxes[4].dataset.piece === boxes[6].dataset.piece) {
                            this.celebrate();
            }
            // check for draw state
            else if (this.turns >= 9) {
                alert("draw");
                this.reset(boxes);
            }
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        var gameContainer = document.querySelector('.game-container'),
            boxes = document.querySelectorAll('.box'),
            game = new Board();
            // var boardCopy = gameContainer.cloneNode(true);
            // document.querySelector('body').appendChild(boardCopy);
        gameContainer.addEventListener('click', function (e) {
            var space = e.target;
            game.turn(space, boxes);
            if (game.gameWon) {
                game.reset(boxes);
            }
        });
    });
})();
