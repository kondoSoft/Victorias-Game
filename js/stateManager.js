var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;

/*
For Fullscreen put this code:

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('letter-a', letterA_State);
game.state.add('letter-e', letterE_State);
game.state.add('letter-i', letterI_State);
game.state.add('letter-o', letterO_State);
game.state.add('letter-u', letterU_State);

game.state.start('boot');
