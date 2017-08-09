
var trace = []

var letterA_State = {
  preload:function(){
    this.traceCount = 0
    this.brush = undefined
    this.totalTraces = Object.keys(lettersTrace['A']).length
    this.pinceles = ['brush-azul', 'brush-amarillo']
    this.indexBrush = 0
  },

  create: function(){
    if (jscd.os == 'iOS') {
      background = game.add.image(0,0, 'board')
    }else {
      if (screen.width <= 960) {
        background = game.add.image(0,0, 'board-android-hdpi')
      }else {
        background = game.add.image(0,0, 'board-android-xhdpi')
      }
    }

    //add letter
    letter = game.add.sprite(350, 150, 'letter-a')

    //add back Button
    this.btn_back = game.add.button(40,60,'btn-back')
    this.btn_back.inputEnabled = true
    this.btn_back.events.onInputDown.add(this.onClickDownBack, this)
    this.btn_back.events.onInputUp.add(this.onClickUpBack, this)


    points = this.initialTrace(lettersTrace, this.traceCount)

    //stickers
    this.beeSticker = game.add.image(100,250, 'abeja-sticker');
    this.planeSticker = game.add.image(100, 450, 'avion-sticker')

    //gis
    var state = this
    this.gisAzul = game.add.button(game.world.width - 220, 300, 'gis-azul', function(){state.indexBrush = 0; state.gisAzul.scale.setTo(0.8, 0.8);  state.gisAmarillo.scale.setTo(1,1)})
    this.gisAzul.rotation = 0.2
    this.gisAzul.scale.setTo(0.8, 0.8)

    this.gisAmarillo = game.add.button(game.world.width - 220, 400, 'gis-amarillo', function(){state.indexBrush = 1; state.gisAmarillo.scale.setTo(0.8, 0.8); state.gisAzul.scale.setTo(1, 1)})
    this.gisAmarillo.rotation = 0.2
    //paint
    game.input.addMoveCallback(this.paint, this);

  },

  render: function(){
    if (this.brush) {
      if (this.checkOverlap(this.brush, points.getFirstAlive())) {
        point = points.getFirstAlive()
        point.kill()

        if (points.countLiving() < 1 && points.countDead() > 3) {
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
          if (screen.width <= 960) {
          }else {
            state.light = game.add.image(0,0,'light-android')
            state.good = game.add.image(game.world.centerX-490,game.world.centerY-133.5, 'good')
          }
        }

      }, 300);
      setTimeout(function () {
        game.state.start('result-a')
      }, 2000);
    }
    if (this.checkOverlap(this.brush, this.planeSticker) ||
        this.checkOverlap(this.brush, this.beeSticker) ||
        this.checkOverlap(this.brush, this.btn_back) ||
        this.checkOverlap(this.brush, this.gisAzul) ||
        this.checkOverlap(this.brush, this.gisAmarillo)) {
      this.brush.kill()
    }

  },

  paint: function (pointer,x ,y){
    if (pointer.isDown) {
      this.brush = game.add.sprite(x -32, y -32, this.pinceles[this.indexBrush])

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
  //Creacion de Trazos para la letras y numeros
  initialTrace: function (words, index){
    var traces = Object.keys(words["A"])
    var group = game.add.group()
    var innerTrace = traces.map(function(item){return words.A[item]})
    // console.log('soy inner ', innerTrace);
    innerTrace[index].map(function(item, i, array){
      if (i == 0) {
        setTimeout(function () {
          group.create(item[0], item[1], 'circleBig')
        }, i*100);
      }else if (i === array.length -1) {
        setTimeout(function () {
          var arrow = group.create(item[0], item[1], 'arrow')
          if (index == 0) {
            arrow.rotation = -2.5
          }
          if (index == 2) {
            arrow.rotation = -1.2
          }
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
      game.state.restart()
      game.state.start('menu')

    }, 100);
  }

}
