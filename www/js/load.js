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
    //Pantalla de resultado
    game.load.image('background-result', 'assets/img/Resultados/fondo.png')
    game.load.image('btn-next', 'assets/img/Resultados/next_button.png')
    game.load.image('btn2-next', 'assets/img/Resultados/next_button2.png')
    game.load.image('btn-reset', 'assets/img/Resultados/reset_button.png')
    game.load.image('btn2-reset', 'assets/img/Resultados/reset_button2.png')
    game.load.image('btn-home', 'assets/img/Resultados/home_button.png')
    game.load.image('btn2-home', 'assets/img/Resultados/home_button2.png')

    //word examples
    //A
    game.load.image('abeja', 'assets/img/letras/letraA/a_abeja.png')
    game.load.image('avion', 'assets/img/letras/letraA/a_avion.png')
    //E
    game.load.image('elefante', 'assets/img/letras/letraE/e_elefante.png')
    game.load.image('estrella', 'assets/img/letras/letraE/e_estrella.png')
    //I
    game.load.image('iglesia', 'assets/img/letras/letraI/i_iglesia.png')
    game.load.image('iguana', 'assets/img/letras/letraI/i_iguana.png')
    //O
    game.load.image('oruga', 'assets/img/letras/letraO/o_oruga.png')
    game.load.image('oso', 'assets/img/letras/letraO/o_oso.png')
    //U
    game.load.image('unicornio', 'assets/img/letras/letraU/u_unicornio.png')
    game.load.image('uva', 'assets/img/letras/letraU/u_uva.png')


    //utils images
    game.load.image('circleBig', 'assets/img/pizarron/punto1.png')
    game.load.image('circleSmall', 'assets/img/pizarron/punto2.png')
    game.load.image('arrow', 'assets/img/pizarron/flecha.png')
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
    game.state.start('menu');
  }
};
