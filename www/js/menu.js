var menuState = {

  create: function () {
    //plugins for debugging
    // game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);

    //added background
    if (jscd.os == 'iOS') {
      background = game.add.image(0, 0, 'background');
    }else {
      background = game.add.image(0, 0, 'background-android');
    }

    //added ABC button
    if (jscd.os == 'iOS') {
      btn_abc = game.add.button(100, 500, 'btn-abc')
    }else {
      btn_abc = game.add.button(game.world.centerX-450, 500, 'btn-abc')
    }
    btn_abc.inputEnabled = true
    btn_abc.events.onInputDown.add(this.onClickAbc, this)
    btn_abc.events.onInputUp.add(this.onClickUpAbc, this)

    if (jscd.os == 'iOS') {
      btn_123 = game.add.button(600, 500, 'btn-123')
    }else {
      btn_123 = game.add.button(game.world.width-500, 500, 'btn-123')
    }

    // added Settings button
    if (jscd.os == 'iOS') {
      btn_settings = game.add.image(870,100,'btn-settings');
    }else {
      btn_settings = game.add.image(game.world.width - 150,80,'btn-settings');
    }

  },

  onClickAbc: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      btn_abc = game.add.button(100, 500, 'btn2-abc')
    }else {
      btn_abc = game.add.button(game.world.centerX-450, 500, 'btn2-abc')
    }
  },
  onClickUpAbc: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      btn_abc = game.add.button(100, 500, 'btn-abc')
    }else {
      btn_abc = game.add.button(game.world.centerX-450, 500, 'btn-abc')
    }
    setTimeout(function () {
      game.state.restart()
      game.state.start('letter-a')
    }, 100);

  }

};
