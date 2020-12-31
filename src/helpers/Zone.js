export default class Zone {
    constructor(scene) {
        this.render = (x, y, width, height, color) => {
            let dropZone = scene.add.zone(x, y, width, height).setRectangleDropZone(width, height)
            dropZone.setData({ cards: 0 })

            let dropZoneOutline = scene.add.graphics()
            dropZoneOutline.lineStyle(2, color)
            dropZoneOutline.strokeRect(
                dropZone.x - dropZone.input.hitArea.width / 2,
                dropZone.y - dropZone.input.hitArea.height / 2,
                dropZone.input.hitArea.width,
                dropZone.input.hitArea.height
            )

            return dropZone
        }
    }
}
