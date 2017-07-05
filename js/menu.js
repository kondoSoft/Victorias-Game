var menuState = {

  create: function () {
    //plugins for debugging
    // game.add.plugin(Phaser.Plugin.Debug);
    // game.add.plugin(Phaser.Plugin.Inspector);

    //added background
    background = game.add.image(0, 0, 'background');
    background.scale.setTo(0.75,0.75)
    //added ABC button
    btn_abc = game.add.button(60, 380, 'btn-abc')
    btn_abc.scale.setTo(0.75, 0.75)
    btn_abc.inputEnabled = true

  }

};
