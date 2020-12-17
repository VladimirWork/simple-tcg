import Phaser from 'phaser'
import Card from './helpers/Card'
import GameManager from './helpers/GameManager'
import cyanCardFront from './assets/CyanCardFront.png'
import magentaCardFront from './assets/MagentaCardFront.png'

const SCALE = 0.25

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

        let myHand = []
        for (let i = 0; i < 5; i++) {
            let card = new Card(this)
            card.render(width / 2.5 + (i * 100), height * 0.9, 'cyanCardFront', SCALE)
            myHand.push(card)
        }

        let enemyHand = []
        for (let i = 0; i < 5; i++) {
            let card = new Card(this)
            card.render(width / 2.5 + (i * 100), height * 0.1, 'magentaCardFront', SCALE)
            enemyHand.push(card)
        }

        this.input.on('dragstart', function (pointer, gameObject) {
            this.children.bringToTop(gameObject)
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
