const View = require('./ttt-view.js');
const Game = require('../backend/game.js');

  $(() => {
    const game = new Game();
    const view = new View(game, $('.ttt'));
    console.log(game);
    console.log(view);
    view.setupBoard();

  });
