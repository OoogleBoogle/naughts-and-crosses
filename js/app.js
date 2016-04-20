/*global document: false */
(function () {
    'use strict';

    function Board() {
        this.cross = '<img src="images/cross.png" alt="cross-icon">';
        this.naught = '<img src="images/nought.png" alt="game-icon">';
        this.crossesTurn = true;
        this.crossScore = 0;
        this.naughtScore = 0;

        this.turn = function (space) {
            if (this.crossesTurn) {
                space.innerHTML = this.cross;
                space.dataset.score = "cross";
                this.crossesTurn = false;
            } else {
                space.innerHTML = this.naught;
                space.dataset.score = "naught";
                this.crossesTurn = true;
            }
        };

        this.winState = function () {
            // loop through board divs for winning match?
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        var gameContainer = document.querySelector('.game-container'),
            game = new Board();
        gameContainer.addEventListener('click', function (e) {
            var space = e.target;
            game.turn(space);

        });
    });
})();
