export default class Card {
    constructor(scene) {
        this.render = (x, y, sprite, scale) => {
            let card = scene.add.image(x, y, sprite).setScale(scale, scale).setInteractive()
            scene.input.setDraggable(card)
            return card
        }
    }
}
