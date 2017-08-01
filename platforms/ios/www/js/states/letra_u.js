var letterU_State = {
  preload:function(){
    this.traceCount = 0
    this.brush = undefined
    this.totalTraces = Object.keys(lettersTrace['U']).length
  },

  create: function(){
    if (jscd.os == 'iOS') {
      background = game.add.image(0,0, 'board')
    }else {
      background = game.add.image(0,0, 'board-android')
    }

    //add letter
    letter = game.add.sprite(300, 150, 'letter-u')

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
        if (points.countLiving() < 1  && points.countDead() > 3) {
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
        state.btn_back.kill()
        game.input.deleteMoveCallback(state.paint, state);
        if (jscd.os == 'iOS') {
          state.light = game.add.image(0,0,'light')
          state.good = game.add.image(game.world.centerX-490,game.world.centerY-133.5, 'good')
        }else {
          state.light = game.add.image(0,0,'light-android')
          state.good = game.add.image(game.world.centerX-490,game.world.centerY-133.5, 'good')
        }

      }, 300);
      setTimeout(function () {
        game.state.start('result-u')
      }, 2000);
    }
  },

  paint: function (pointer,x ,y){
    if (pointer.isDown) {
      this.brush = game.add.sprite(x -32, y -32, 'brush-amarillo')
    }
  },

  checkOverlap: function (pointA, pointB){
    if (pointA && pointB) {
      var boundsA = pointA.getBounds()
      var boundsB = pointB.getBounds()
      return Phaser.Rectangle.intersects(boundsA, boundsB)
    }
  },

  initialTrace: function (words, index){
    var traces = Object.keys(words["U"])
    var group = game.add.group()
    var innerTrace = traces.map(function(item){return words.U[item]})
    // console.log('soy inner ', innerTrace);
    innerTrace[index].map(function(item, i, array){
      if (i == 0) {
        setTimeout(function () {
          group.create(item[0], item[1], 'circleBig')
        }, i*100);
      }else if (i == array.length-1) {
        setTimeout(function () {
          var arrow = group.create(item[0], item[1], 'arrow')
          arrow.rotation = -2.8
        }, i*100);
      }else {
        setTimeout(function () {
          group.create(item[0], item[1], 'circleSmall')
        }, i*100);
      }
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
      game.state.start('menu')

    }, 100);
  }

}
