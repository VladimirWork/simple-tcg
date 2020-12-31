import Card from './Card'
import Zone from './Zone'


export default class GameManager {
    constructor(scene) {
        this.renderZones = (width, height) => {
            const color1 = 0x00ffff
            const color2 = 0xff69b4

            let zone1 = new Zone(scene)
            zone1.render(width / 2, height * 0.65, width / 2, height / 4, color1)

            let zone2 = new Zone(scene)
            zone2.render(width / 2, height * 0.35, width / 2, height / 4, color2)
        }

        this.dealCards = (amount, width, height, position, image, scale) => {
            let hand = []

            for (let i = 0; i < amount; i++) {
                let card = new Card(scene)
                card.render(width / 3 + (i * 100), height * position, image, scale)
                hand.push(card)
            }

            return hand
        }
    }
}
