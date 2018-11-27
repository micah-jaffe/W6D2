class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    let $li = $('li');
    let pos = $li.data('position');
  }

  makeMove($square) {}

  setupBoard() {
    let $ul = $('<ul></ul>');
    this.$el.append($ul);

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $li = $('<li></li>');
        $ul.append($li);

        $li.attr('position', [i, j]);
      }
    }
  }
}

module.exports = View;
