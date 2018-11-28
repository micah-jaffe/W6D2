class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.clickTower();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul></ul>');
      $ul.addClass(`tower-${i}`);
      $ul.data("idx", i);

      if (i === 0) {
        let $li = $('<li class="small"></li>');
        $ul.append($li);

        $li = $('<li class="medium"></li>');
        $ul.append($li);

        $li = $('<li class="big"></li>');
        $ul.append($li);
      }

      this.$el.append($ul);
    }
  }

  render() {

  }

  makeMove($fromTower, $toTower) {
    // this.game.move($fromTower.data('idx'), $toTower.data('idx'));
    let $disc = $($fromTower.children()[0]);
    // console.log($fromTower);
    // console.log($toTower);
    console.log($disc.parent());

    $toTower.prepend($disc);
    //console.log($disc.parent());
    //$disc.remove();
  }

  clickTower() {
    let $ul = $('ul');
    $ul.on('click', (e) => {
      let tower = $(e.currentTarget);
      if (!this.fromTower) {
        this.fromTower = tower;
      } else {
        try {
          this.makeMove(this.fromTower, tower);
          this.fromTower = null;
        } catch(error){
          alert(error);
        }
      }
    });
  }
}

module.exports = HanoiView;
