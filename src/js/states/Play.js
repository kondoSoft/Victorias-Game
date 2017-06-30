import config from '../config';

export default class Play extends Phaser.State {
    constructor(){
        super();
    }

    init(){
    }

    preload(){
    }

    create(){
      this.add.sprite(this.world.centerX - 202, this.world.centerY - 250,'letra-a')
    }

    update(){
    }

    shutdown(){
    }
}
