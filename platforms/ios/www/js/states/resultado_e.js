var resultadoE_State = {
  create: function(){
    this.background = game.add.image(0,0, 'background-result')

    //NEXT Button
    this.btn_next = game.add.button(424.5,480, 'btn-next')
    this.btn_next.inputEnabled = true
    this.btn_next.events.onInputDown.add(this.onClickDownNext, this)
    this.btn_next.events.onInputUp.add(this.onClickUpNext, this)

    //Button HOME
    this.btn_home = game.add.button(200,520, 'btn-home')
    this.btn_home.inputEnabled = true
    this.btn_home.events.onInputDown.add(this.onClickDownHome, this)
    this.btn_home.events.onInputUp.add(this.onClickUpHome, this)


    //Button Reset
    this.btn_reset = game.add.button(700,520, 'btn-reset')
    this.btn_reset.inputEnabled = true
    this.btn_reset.events.onInputDown.add(this.onClickDownReset, this)
    this.btn_reset.events.onInputUp.add(this.onClickUpReset, this)


    //Image Words
    this.elephant = game.add.image(80,130,'elefante')
    this.elephant.rotation = -0.050

    this.star = game.add.image(560, 110, 'estrella')
    this.star.rotation = 0.050

  },

  onClickDownNext: function(e){
    e.kill()
    this.btn_next = game.add.button(424.5,480, 'btn2-next')
  },
  onClickUpNext: function(e){
    e.kill()
    this.btn_next = game.add.button(424.5,480, 'btn-next')
    setTimeout(function () {
      game.state.start('letter-i')
    }, 100);
  },
  onClickDownHome: function(e){
    e.kill()
    this.btn_home = game.add.button(200,520, 'btn2-home')
  },
  onClickUpHome: function(e){
    e.kill()
    this.btn_home = game.add.button(200,520, 'btn-home')
    setTimeout(function () {
      game.state.start('menu')
    }, 100);
  },
  onClickDownReset: function(e){
    e.kill()
    this.btn_reset = game.add.button(700,520, 'btn2-reset')
  },
  onClickUpReset: function(e){
    e.kill()
    this.btn_reset = game.add.button(700,520, 'btn-reset')
    setTimeout(function () {
      game.state.start('letter-e')
    }, 100);
  },
}
