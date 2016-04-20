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
                this.crossScore += parseInt(space.dataset.score);
                this.crossesTurn = false;
                this.winState(this.crossScore);
            } else {
                space.innerHTML = this.naught;
                this.naughtScore += parseInt(space.dataset.score);
                this.crossesTurn = true;
                this.winState(this.naughtScore);
            }
        };

        this.winState = function (score) {
            console.log(score);
            var winningScores = [6, 60, 600, 111, 222, 333, 321, 123, 620, 421, 411];
            winningScores.forEach(function(winner) {
                if (score === winner) {
                    alert("Winner");
                }
            })
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
