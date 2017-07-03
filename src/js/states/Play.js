import config from '../config';
import Helpers from '../objects/Helpers'


export default class Play extends Phaser.State {
    constructor(){
        super();
    }

    init(){
    }

    preload(){
    }

    create(){
      // add background
      this.background = this.add.image(0,0,'board')
      this.background.scale.setTo(2,2)
      // add letter sprite
      this.letter = this.add.sprite(this.world.centerX - 350, this.world.centerY -480,'letra-a')
      this.letter.scale.setTo(1.8, 1.8)

      // add back button
      this.backButton = this.add.button(50,100,'back-btn')
      this.backButton.scale.setTo(1.8,1.8)
      this.backButton.inputEnabled = true;
      this.backButton.events.onInputDown.add(this.onClickBackButton, this)

      // Paint listener
      game.input.addMoveCallback(this.paint, this);

    }

    update(){
      if (this.brush) {
        // if (Helpers.checkOverlap(this.letter, this.brush)) {
        //
        // }
      }
    }

    shutdown(){
    }

    paint(pointer, x, y){
      if (pointer.isDown) {
        this.brush = this.add.sprite(x -64, y-64,'brush')
        this.brush.scale.setTo(2,2)

      }
    }

    onClickBackButton(){
      this.game.state.start('menu', true, false)

    }
}
