var resultadoE_State = {
  create: function(){
    if (jscd.os == 'iOS') {
      this.background = game.add.image(0,0, 'background-result')
    }else {
      this.background = game.add.image(0,0, 'background-result-android-xhdpi')
    }

    //NEXT Button
    if (jscd.os == 'iOS') {
      this.btn_next = game.add.button(424.5,480, 'btn-next')
    }else {
      this.btn_next = game.add.button(game.world.centerX - 87.5,480, 'btn-next')
    }
    this.btn_next.inputEnabled = true
    this.btn_next.events.onInputDown.add(this.onClickDownNext, this)
    this.btn_next.events.onInputUp.add(this.onClickUpNext, this)

    //Button HOME
    if (jscd.os == 'iOS') {
      this.btn_home = game.add.button(200,520, 'btn-home')
    }else {
      this.btn_home = game.add.button(game.world.centerX - 351,520, 'btn-home')
    }
    this.btn_home.inputEnabled = true
    this.btn_home.events.onInputDown.add(this.onClickDownHome, this)
    this.btn_home.events.onInputUp.add(this.onClickUpHome, this)


    //Button Reset
    if (jscd.os == 'iOS') {
      this.btn_reset = game.add.button(700,520, 'btn-reset')
    }else {
      this.btn_reset = game.add.button(game.world.width - 426,520, 'btn-reset')
    }
    this.btn_reset.inputEnabled = true
    this.btn_reset.events.onInputDown.add(this.onClickDownReset, this)
    this.btn_reset.events.onInputUp.add(this.onClickUpReset, this)


    //Image Words
    if (jscd.os == 'iOS') {
      this.elephant = game.add.image(80,130,'elefante')
      this.elephant.rotation = -0.050

      this.star = game.add.image(560, 110, 'estrella')
      this.star.rotation = 0.050
    }else {
      this.elephant = game.add.image(game.world.centerX - 470,130,'elefante')
      this.elephant.rotation = -0.050

      this.star = game.add.image(game.world.centerX + 80, 110, 'estrella')
      this.star.rotation = 0.050
    }

  },

  onClickDownNext: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      this.btn_next = game.add.button(424.5,480, 'btn2-next')
    }else {
      this.btn_next = game.add.button(game.world.centerX - 87.5,480, 'btn2-next')
    }
  },
  onClickUpNext: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      this.btn_next = game.add.button(424.5,480, 'btn-next')
    }else {
      this.btn_next = game.add.button(game.world.centerX - 87.5,480, 'btn-next')
    }
    setTimeout(function () {
      game.state.start('letter-i')
    }, 100);
  },
  onClickDownHome: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      this.btn_home = game.add.button(200,520, 'btn2-home')
    }else {
      this.btn_home = game.add.button(game.world.centerX - 351,520, 'btn2-home')
    }
  },
  onClickUpHome: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      this.btn_home = game.add.button(200,520, 'btn-home')
    }else {
      this.btn_home = game.add.button(game.world.centerX - 351,520, 'btn-home')
    }
    setTimeout(function () {
      game.state.start('menu')
    }, 100);
  },
  onClickDownReset: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      this.btn_reset = game.add.button(700,520, 'btn2-reset')
    }else {
      this.btn_reset = game.add.button(game.world.width - 426,520, 'btn2-reset')
    }  },
  onClickUpReset: function(e){
    e.kill()
    if (jscd.os == 'iOS') {
      this.btn_reset = game.add.button(700,520, 'btn-reset')
    }else {
      this.btn_reset = game.add.button(game.world.width - 426,520, 'btn-reset')
    }
    setTimeout(function () {
      game.state.start('letter-e')
    }, 100);
  },
}
