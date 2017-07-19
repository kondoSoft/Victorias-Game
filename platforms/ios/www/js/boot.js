var lettersTrace = {
  "A":{
    "trace-01":[[385,565],[425,490],[450,410],[475,336],[500,260],[540,270]],
    "trace-02":[[555,290],[595,375],[620,445],[645,510],[640,550]],
    "trace-03":[[400,470],[496,480],[586.,480],[640,520]],
  },
  "E":{
    "trace-01":[[645,185],[570,200],[485,200],[460,190]],
    "trace-02":[[413,250],[425,340],[425,410],[425,490],[410,540]],
    "trace-03":[[475,560],[580,575],[630,605]],
    "trace-04":[[405,380],[520,390],[570,425]]
  },
  "I":{
    "trace-01":[[510,190],[525,286.6669921875],[525,378],[525,472],[510,540]],
    "trace-02":[[390,185],[473,198],[542,198],[612,198],[630,230]],
    "trace-03":[[390,570],[472,582],[532,582],[594,582],[620,620]]
  },
  "O":{
    "trace-01":[[500,190],[390,256],[350,353],[360,454.6669921875],[412,537],[413.3330078125,537.3330078125],[493.3330078125,585.3330078125],[610,560],[681.3330078125,453.3330078125],[673.3330078125,302.6669921875],[660,240]],
  },
  "U":{
    "trace-01":[[335,200],[345,276],[345,345.3330078125],[345,412],[350,481.3330078125],[374,536],[417,572],[489,584],[572,565],[620,508],[630,430.6669921875],[630,341.3330078125],[630,262.6669921875],[665,250]]
  }
}

var bootState = {

    create: function () {

        //Initial GameSystem (Arcade, P2, Ninja)
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);
        // this.game.stateTransition.configure({
        //   duration: Phaser.Timer.SECOND * 0.8,
        //   ease: Phaser.Easing.Exponential.InOut,
        //   properties: {
        //     alpha: 0,
        //     scale: {
        //       x: 1,
        //       y: 1
        //     }
        //   }
        // });

        //Initial Load State
        game.state.start('load');
    }
};