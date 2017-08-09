// var w = window.innerWidth * window.devicePixelRatio,
//     h = window.innerHeight * window.devicePixelRatio;

/*
For Fullscreen put this code:

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
//game stages
game.state.add('letter-a', letterA_State);
game.state.add('letter-e', letterE_State);
game.state.add('letter-i', letterI_State);
game.state.add('letter-o', letterO_State);
game.state.add('letter-u', letterU_State);
//Results
game.state.add('result-a', resultadoA_State);
game.state.add('result-e', resultadoE_State);
game.state.add('result-i', resultadoI_State);
game.state.add('result-o', resultadoO_State);
game.state.add('result-u', resultadoU_State);


game.state.start('boot');
