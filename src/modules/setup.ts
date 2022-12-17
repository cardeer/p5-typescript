import p5 from 'p5'
import { Module, BaseModule } from 'p5-decorators'

@Module('setup')
export default class Setup extends BaseModule {
  public render(s: p5) {
    s.createCanvas(s.windowWidth, s.windowHeight)
    s.background(0)
  }
}
