import Phaser from 'phaser'
import Card from './helpers/Card'
import GameManager from './helpers/GameManager'
import cyanCardFront from './assets/CyanCardFront.png'
import magentaCardFront from './assets/MagentaCardFront.png'
import { SCALE } from './helpers/Constants'


class MyGame extends Phaser.Scene
{
    constructor () {
        super()
    }

    preload () {
        this.load.image('cyanCardFront', cyanCardFront)
        this.load.image('magentaCardFront', magentaCardFront)
    }

    create () {
        const { width, height } = this.sys.game.canvas
        const gm = new GameManager(this)

        gm.renderZones(width, height)

        let myHand = gm.dealCards(5, width, height, 0.9, 'cyanCardFront', SCALE)

        let enemyHand = gm.dealCards(5, width, height, 0.1, 'magentaCardFront', SCALE)

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setScale(SCALE)
        }, this)

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX
            gameObject.y = dragY
        })
    }

    update () {}
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1900,
    height: 900,
    scene: MyGame
}

const game = new Phaser.Game(config)
