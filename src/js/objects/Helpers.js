import config from '../config'

export default {
    checkOverlap(pointA, pointB){
      if (pointA && pointB) {
        var boundsA = pointA.getBounds()
        var boundsB = pointB.getBounds()
        return Phaser.Rectangle.intersects(boundsA, boundsB)
      }
    }
}
