import config from '../config';

export default class Menu extends Phaser.State{
  constructor(){
    super()
  }

  create(){
    let background = this.add.image(0,0,'menu-background')
    background.scale.setTo(2,2)


    let btn_123 = this.add.button(this.world.width - 810, this.world.height - 540, 'btn-123')
    btn_123.scale.setTo(1.8,1.8)

    this.btn_abc = this.add.button(this.world.centerX - 840, this.world.centerY+230, 'btn-abc')
    this.btn_abc.scale.setTo(1.8,1.8)
    this.btn_abc.inputEnabled = true;
    this.btn_abc.events.onInputDown.add(this.onClickAbc, this)

    let btn_settings = this.add.image(this.world.width - 300, 200, 'btn-settings')
    btn_settings.scale.setTo(1.8,1.8)
  }

  onClickAbc(){
    this.game.state.start('play');
  }

}
