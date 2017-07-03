import config from '../config';

export default class Preload extends Phaser.State {
    constructor(){
        super();
        this.ready = false;
    }

    preload(){
        this.load.atlasXML('atlas', 'gfx/atlas.png', 'gfx/atlas.xml', Phaser.Loader.TEXTURE_ATLAS_XML_STARLING);

        //fonts
        this.load.bitmapFont('main-font', 'fonts/main-font.png', 'fonts/main-font.fnt');

        this.load.image('brush', 'img/brush.png')
        this.load.image('circle', 'img/circle.png')
        // First letter
        this.load.image('letra-a', 'img/letraA/letra_A.png')
        this.load.image('board', 'img/pizarron/pizarron.png')
        this.load.image('back-btn', 'img/pizarron/button_back.png')
        // Menu main
        this.load.image('btn-abc', 'img/menu_inicio/button_abc.png')
        this.load.image('btn-123', 'img/menu_inicio/button_123.png')
        this.load.image('btn-settings', 'img/menu_inicio/button_settings.png')
        this.load.image('menu-background', 'img/menu_inicio/menu_fondo.png')


        this.load.onLoadComplete.addOnce(()=>{
            console.log('assets loaded');
            this.ready = true;
        }, this);
    }

    create(){
    }

    update(){
        let nextState;

        if(!!this.ready) {
            config.init2(this.game);

            if(!true){
                nextState = 'screen-test';
            } else {
                nextState = 'menu';
            }

            this.game.state.start(nextState);
        }
    }
}
