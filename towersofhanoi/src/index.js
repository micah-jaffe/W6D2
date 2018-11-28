const HanoiGame = require('../backend/game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.toh');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  //view.setupTowers();
});
