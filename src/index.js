import Phaser from 'phaser'

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super()
    }

    preload ()
    {

    }
      
    create ()
    {

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1900,
    height: 900,
    scene: MyGame
}

const game = new Phaser.Game(config)
