var loadState = {

  preload: function () {

    /*
    Load all game assets
    Place your load bar, some messages.
    In this case of loading, only text is placed...
    */

    var loadingLabel = game.add.text(game.world.centerX-130, game.world.centerY, 'loading...', {font: '50px Courier', fill: '#fff'});

    //Load your images, spritesheets, bitmaps...
    //*** IOS ASSETS ***\\
    // Menu main assets
    game.load.image('background', 'assets/img/ios/no_retina/menu_inicio/menu_fondo.png')
    game.load.image('btn-settings', 'assets/img/ios/no_retina/menu_inicio/button_settings.png')
    game.load.image('btn-abc', 'assets/img/ios/no_retina/menu_inicio/button_abc.png')
    game.load.image('btn2-abc', 'assets/img/ios/no_retina/menu_inicio/button2_abc.png')
    game.load.image('btn-123', 'assets/img/ios/no_retina/menu_inicio/button_123.png')
    //Game images
    game.load.image('board', 'assets/img/ios/no_retina/pizarron/pizarron.png')
    game.load.image('gis-azul', 'assets/img/ios/no_retina/pizarron/gis_azul.png')
    game.load.image('gis-amarillo', 'assets/img/ios/no_retina/pizarron/gis_amarillo.png')
    game.load.image('gis-rosa', 'assets/img/ios/no_retina/pizarron/gis_rosa.png')
    game.load.image('light', 'assets/img/ios/no_retina/pizarron/luces.png')
    game.load.image('good', 'assets/img/ios/no_retina/pizarron/muybien.png')
    //letters
    game.load.image('letter-a', 'assets/img/ios/no_retina/letras/letraA/letra_A.png')
    game.load.image('letter-e', 'assets/img/ios/no_retina/letras/letraE/letra_E.png')
    game.load.image('letter-i', 'assets/img/ios/no_retina/letras/letraI/letra_I.png')
    game.load.image('letter-o', 'assets/img/ios/no_retina/letras/letraO/letra_O.png')
    game.load.image('letter-u', 'assets/img/ios/no_retina/letras/letraU/letra_U.png')
    //Pantalla de resultado
    game.load.image('background-result', 'assets/img/ios/no_retina/resultados/fondo.png')
    game.load.image('btn-next', 'assets/img/ios/no_retina/resultados/next_button.png')
    game.load.image('btn2-next', 'assets/img/ios/no_retina/resultados/next_button2.png')
    game.load.image('btn-reset', 'assets/img/ios/no_retina/resultados/reset_button.png')
    game.load.image('btn2-reset', 'assets/img/ios/no_retina/resultados/reset_button2.png')
    game.load.image('btn-home', 'assets/img/ios/no_retina/resultados/home_button.png')
    game.load.image('btn2-home', 'assets/img/ios/no_retina/resultados/home_button2.png')

    //word examples
    //A
    game.load.image('abeja', 'assets/img/ios/no_retina/letras/letraA/a_abeja.png')
    game.load.image('avion', 'assets/img/ios/no_retina/letras/letraA/a_avion.png')
    game.load.image('abeja-sticker', 'assets/img/ios/no_retina/letras/letraA/abeja.png')
    game.load.image('avion-sticker', 'assets/img/ios/no_retina/letras/letraA/avion.png')
    //E
    game.load.image('elefante', 'assets/img/ios/no_retina/letras/letraE/e_elefante.png')
    game.load.image('estrella', 'assets/img/ios/no_retina/letras/letraE/e_estrella.png')
    game.load.image('elefante-sticker', 'assets/img/ios/no_retina/letras/letraE/elefante.png')
    game.load.image('estrella-sticker', 'assets/img/ios/no_retina/letras/letraE/estrella.png')

    //I
    game.load.image('iglesia', 'assets/img/ios/no_retina/letras/letraI/i_iglesia.png')
    game.load.image('iguana', 'assets/img/ios/no_retina/letras/letraI/i_iguana.png')
    game.load.image('iglesia-sticker', 'assets/img/ios/no_retina/letras/letraI/iglesia.png')
    game.load.image('iguana-sticker', 'assets/img/ios/no_retina/letras/letraI/iguana.png')

    //O
    game.load.image('oruga', 'assets/img/ios/no_retina/letras/letraO/o_oruga.png')
    game.load.image('oso', 'assets/img/ios/no_retina/letras/letraO/o_oso.png')
    game.load.image('oruga-sticker', 'assets/img/ios/no_retina/letras/letraO/oruga.png')
    game.load.image('oso-sticker', 'assets/img/ios/no_retina/letras/letraO/oso.png')

    //U
    game.load.image('unicornio', 'assets/img/ios/no_retina/letras/letraU/u_unicornio.png')
    game.load.image('uva', 'assets/img/ios/no_retina/letras/letraU/u_uva.png')
    game.load.image('uva-sticker', 'assets/img/ios/no_retina/letras/letraU/uva.png')
    game.load.image('unicornio-sticker', 'assets/img/ios/no_retina/letras/letraU/unicornio.png')


    //*** ANDROID ASSETS ***\\
    // Menu main assets
    //XHDPI
    game.load.image('background-android-xhdpi', 'assets/img/android/xhdpi/menu_inicio/pizarron.png')
    //HDPI
    game.load.image('background-android-hdpi', 'assets/img/android/hdpi/menu_inicio/pizarron.png')
    game.load.image('btn-abc-android-hdpi', 'assets/img/android/hdpi/menu_inicio/button_abc.png')
    game.load.image('btn2-abc-android-hdpi', 'assets/img/android/hdpi/menu_inicio/button2_abc.png')
    game.load.image('btn-123-android-hdpi', 'assets/img/android/hdpi/menu_inicio/button_123.png')
    game.load.image('btn2-123-android-hdpi', 'assets/img/android/hdpi/menu_inicio/button2_123.png')
    game.load.image('btn-settings-android-hdpi', 'assets/img/android/hdpi/menu_inicio/button_settings.png')
    game.load.image('btn2-settings-android-hdpi', 'assets/img/android/hdpi/menu_inicio/button2_settings.png')



    //Pantalla de juego
    //XHDPI
    game.load.image('board-android-xhdpi', 'assets/img/android/xhdpi/pizarron/pizarron.png')
    game.load.image('light-android-xhdpi', 'assets/img/android/xhdpi/pizarron/luces.png')
    //HDPI
    game.load.image('board-android-hdpi', 'assets/img/android/hdpi/pizarron/pizarron.png')

    //Pantalla de Resultados
    game.load.image('background-result-android-xhdpi', 'assets/img/android/xhdpi/resultados/fondo.png')

    //*** GENERIC ASSETS ***\\
    //utils images
    game.load.image('circleBig', 'assets/img/ios/no_retina/pizarron/punto1.png')
    game.load.image('circleSmall', 'assets/img/ios/no_retina/pizarron/punto2.png')
    game.load.image('arrow', 'assets/img/ios/no_retina/pizarron/flecha.png')
    game.load.image('brush-azul', 'assets/img/brush_azul.png')
    game.load.image('brush-amarillo', 'assets/img/brush_amarillo.png')
    game.load.image('brush-rosa', 'assets/img/brush_rosa.png')

    game.load.image('btn-back', 'assets/img/ios/no_retina/pizarron/button_back.png')
    game.load.image('btn2-back', 'assets/img/ios/no_retina/pizarron/button2_back.png')

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
