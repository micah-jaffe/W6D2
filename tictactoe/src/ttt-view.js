class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    let $li = $('li');

    $li.on('click', (e) => {
      let pos = $(e.currentTarget).data('position');
      try {
        this.game.playMove(pos);
      } catch(err) {
        alert('Invalid move!');
      } finally {

        this.makeMove($(e.currentTarget));
      }

      if (this.game.isOver()) {
        this.$el.append(`<h2>You win, ${this.game.currentPlayer}!!</h2>`);
      }

    });
  }

  makeMove($square) {
    $square.addClass('clicked');
    $square.html(this.game.currentPlayer);
    if (this.game.currentPlayer === 'x') {
      $square.addClass('x');
    } else {
      $square.addClass('o');
    }
  }

  setupBoard() {
    let $ul = $('<ul></ul>');
    this.$el.append($ul);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $li = $('<li></li>');
        $ul.append($li);

        $li.data('position', [i, j]);
      }
    }
  }
}

module.exports = View;
