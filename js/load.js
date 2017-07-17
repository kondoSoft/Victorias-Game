var loadState = {

  preload: function () {

    /*
    Load all game assets
    Place your load bar, some messages.
    In this case of loading, only text is placed...
    */

    var loadingLabel = game.add.text(game.world.centerX, game.world.centerY, 'loading...', {font: '30px Courier', fill: '#fff'});

    //Load your images, spritesheets, bitmaps...
    // Menu main assets
    game.load.image('background', 'assets/img/menu_inicio/menu_fondo.png')
    game.load.image('btn-settings', 'assets/img/menu_inicio/button_settings.png')
    game.load.image('btn-abc', 'assets/img/menu_inicio/button_abc.png')
    game.load.image('btn2-abc', 'assets/img/menu_inicio/button2_abc.png')
    game.load.image('btn-123', 'assets/img/menu_inicio/button_123.png')
    //Game images
    game.load.image('board', 'assets/img/pizarron/pizarron.png')
    game.load.image('gis-azul', 'assets/img/pizarron/gis_azul.png')
    game.load.image('gis-amarillo', 'assets/img/pizarron/gis_amarillo.png')
    game.load.image('gis-rosa', 'assets/img/pizarron/gis_rosa.png')
    game.load.image('light', 'assets/img/pizarron/luces.png')
    game.load.image('good', 'assets/img/pizarron/muybien.png')
    //letters
    game.load.image('letter-a', 'assets/img/letras/letraA/letra_A.png')
    game.load.image('letter-e', 'assets/img/letras/letraE/letra_E.png')
    game.load.image('letter-i', 'assets/img/letras/letraI/letra_I.png')
    game.load.image('letter-o', 'assets/img/letras/letraO/letra_O.png')
    game.load.image('letter-u', 'assets/img/letras/letraU/letra_U.png')



    //utils images
    game.load.image('circle', 'assets/img/circle.png')
    game.load.image('brush-azul', 'assets/img/brush_azul.png')
    game.load.image('brush-amarillo', 'assets/img/brush_amarillo.png')
    game.load.image('brush-rosa', 'assets/img/brush_rosa.png')

    game.load.image('btn-back', 'assets/img/pizarron/button_back.png')
    game.load.image('btn2-back', 'assets/img/pizarron/button2_back.png')




    //Load your sounds, efx, music...
    //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

    //Load your data, JSON, Querys...
    //Example: game.load.json('version', 'http://phaser.io/version.json');

  },

  create: function () {

    game.stage.setBackgroundColor('#000');
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.stateTransition.to('menu');
  }
};
