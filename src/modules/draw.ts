import p5 from 'p5'
import { BaseModule, Module } from 'p5-decorators'

@Module('draw')
export default class Draw extends BaseModule {
  private rotation = 99
  private rectSize = 200

  constructor() {
    super()
  }

  public render(s: p5) {
    s.background(0)

    s.beginShape()
    s.fill(0, 0, 0, 0)
    s.stroke('white')
    s.strokeWeight(5)
    s.translate(s.windowWidth / 2, s.windowHeight / 2)
    s.rotate((s.PI / 180) * this.rotation)
    s.rect(-this.rectSize / 2, -this.rectSize / 2, this.rectSize)
    s.endShape()
    this.rotation += 1
  }
}
