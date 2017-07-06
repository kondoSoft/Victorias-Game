var words = {
  "A":{
    "trace-01":[[409,588],[432,505],[460,416],[493,336],[514.6669921875,273.3330078125],[529.3330078125,202.66700744628906]],
    "trace-02":[[564,274],[589.3330078125,354.6669921875],[618,436],[649.3330078125,501.3330078125],[670.6669921875,558.6669921875],[688,602]],
    "trace-03":[[416,493],[496,493],[586.6669921875,494.6669921875],[665.3330078125,497.3330078125]],
  }
}

var trace = []

var gameState = {
  preload:function(){
    //variables globales al estado
    this.traceCount = 0
    this.text
    this.brush = undefined


  },

  create: function(){

    background = game.add.image(0,0, 'board')

    //add letter
    letter = game.add.sprite(350, 150, 'letter-a')

    //add back Button
    btn_back = game.add.button(40,60,'btn-back')
    btn_back.inputEnabled = true
    btn_back.events.onInputDown.add(this.onClickBack, this)

    points = game.add.group()
    this.initialTrace(points, this.traceCount)

    //paint
    game.input.addMoveCallback(this.paint, this);
  },

  update: function(){

  },

  render: function(){
    if (this.brush) {
      if (this.checkOverlap(this.brush, points.getFirstAlive())) {
        point = points.getFirstAlive()
        point.kill()
        if (points.countLiving() < 1) {
          this.traceCount++
          if (this.traceCount<3) {
            this.initialTrace(points, this.traceCount)
          }
        }
      }
    }
    if (this.traceCount > 2 && this.traceCount < 4 && points.countLiving()<1) {
      this.traceCount++
      // this.text = game.add.text(350, 150, 'Muy Bien', {fill:'#000', font:'helvetica', fontSize:100})
      this.light = game.add.image(0,0,'light')
      this.good = game.add.image(30,300, 'good')
    }
  },

  paint: function (pointer,x ,y){
    if (pointer.isDown) {
      this.brush = game.add.sprite(x -32, y -32, 'brush-amarillo')
      // trace.push([x,y])
      // console.log(JSON.stringify(trace))
      // console.log(points.getAll())

    }
  },

  checkOverlap: function (pointA, pointB){
    if (pointA && pointB) {
      var boundsA = pointA.getBounds()
      var boundsB = pointB.getBounds()
      return Phaser.Rectangle.intersects(boundsA, boundsB)
    }
  },

  initialTrace: function (points, i){
    var traces = Object.keys(words["A"])
    var innerTrace = traces.map(function(item, i){return words.A[item]})
    // console.log('soy inner ', innerTrace);
    innerTrace[i].map(function(item, i){
      setTimeout(function () {
        points.create(item[0], item[1], 'circle')
      }, i*100);
    });
  },

  onClickBack: function(){
    points.killAll()
    game.state.start('menu')
  }

}
