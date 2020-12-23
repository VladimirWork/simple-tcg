import { SCALE, SCALE_BIG } from './Constants'


export default class Card {
    constructor(scene) {
        this.render = (x, y, sprite, scale) => {
            let card = scene.add.image(x, y, sprite).setScale(scale, scale).setInteractive()
            card.on('pointerover', function(pointer) {
                card.setScale(SCALE_BIG)
                scene.children.bringToTop(card)
            })

            card.on('pointerout', function(pointer) {
                card.setScale(SCALE)
            })
            scene.input.setDraggable(card)
            return card
        }
    }
}
