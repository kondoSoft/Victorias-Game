
var trace = []

var letterA_State = {
  preload:function(){
    this.traceCount = 0
    this.brush = undefined
    this.totalTraces = Object.keys(lettersTrace['A']).length
  },

  create: function(){

    background = game.add.image(0,0, 'board')

    //add letter
    letter = game.add.sprite(350, 150, 'letter-a')

    //add back Button
    this.btn_back = game.add.button(40,60,'btn-back')
    this.btn_back.inputEnabled = true
    this.btn_back.events.onInputDown.add(this.onClickDownBack, this)
    this.btn_back.events.onInputUp.add(this.onClickUpBack, this)


    points = this.initialTrace(lettersTrace, this.traceCount)

    //paint
    game.input.addMoveCallback(this.paint, this);

  },

  render: function(){
    if (this.brush) {
      if (this.checkOverlap(this.brush, points.getFirstAlive())) {
        point = points.getFirstAlive()
        point.kill()
        if (points.countLiving() < 1) {
          this.traceCount++
          if (this.traceCount < this.totalTraces) {
            points = this.initialTrace(lettersTrace, this.traceCount)
          }
        }
      }
    }
    if (this.traceCount == this.totalTraces && points.countLiving()<1) {
      this.traceCount++
      var state = this
      setTimeout(function () {
        game.input.deleteMoveCallback(state.paint, state);
        state.light = game.add.image(0,0,'light')
        state.good = game.add.image(30,300, 'good')

        state.btn_back = null
        state.btn_back = game.add.button(40,60,'btn-back')
        state.btn_back.inputEnabled = true
        state.btn_back.events.onInputDown.add(state.onClickDownBack, state)
        state.btn_back.events.onInputDown.add(state.onClickUpBack, state)


      }, 500);
      setTimeout(function () {
        game.stateTransition.to('letter-e')
      }, 3000);
    }
  },

  paint: function (pointer,x ,y){
    if (pointer.isDown) {
      this.brush = game.add.sprite(x -32, y -32, 'brush-amarillo')

      // let puntos = game.add.group()
      // puntos.create(x - 8,y - 8,'circle')
      // trace.push([x,y])
      // console.log(JSON.stringify(trace))
    }
  },

  checkOverlap: function (pointA, pointB){
    if (pointA && pointB) {
      var boundsA = pointA.getBounds()
      var boundsB = pointB.getBounds()
      return Phaser.Rectangle.intersects(boundsA, boundsB)
    }
  },

  initialTrace: function (words, i){
    var traces = Object.keys(words["A"])
    var group = game.add.group()
    var innerTrace = traces.map(function(item){return words.A[item]})
    // console.log('soy inner ', innerTrace);
    innerTrace[i].map(function(item, i){
      setTimeout(function () {
        group.create(item[0], item[1], 'circle')
      }, i*100);
    });
    return group
  },

  onClickDownBack: function(e){
    game.input.deleteMoveCallback(this.paint, this);
    e.kill()
    this.btn_back = game.add.button(40,60,'btn2-back')

  },
  onClickUpBack: function(e){
    e.kill()
    this.btn_back = game.add.button(40,60,'btn-back')
    setTimeout(function () {
      points.killAll()
      game.state.restart()
      game.stateTransition.to('menu')

    }, 100);
  }

}
