var menuState = {

  create: function () {
    //plugins for debugging
    // game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);

    //added background
    background = game.add.image(0, 0, 'background');
    // background.scale.setTo(0.75,0.75)
    //added ABC button
    btn_abc = game.add.button(100, 500, 'btn-abc')
    // btn_abc.scale.setTo(0.75, 0.75)
    btn_abc.inputEnabled = true
    btn_abc.events.onInputDown.add(this.onClickAbc, this)

    btn_123 = game.add.button(600, 500, 'btn-123')
    // btn_123.scale.setTo(0.75,0.75)

    // added Settings button

    btn_settings = game.add.image(870,100,'btn-settings');
    // btn_settings.scale.setTo(0.75,0.75)

  },

  onClickAbc: function(){
    game.state.start('game')
  }

};
