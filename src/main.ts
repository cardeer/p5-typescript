import 'reflect-metadata'

import './styles/global.scss'
import Setup from './modules/setup'
import { BaseCanvas, Canvas } from 'p5-decorators'
import Draw from './modules/draw'

@Canvas('#app')
class App extends BaseCanvas {
  constructor() {
    super()

    this.register(Setup)
    this.register(Draw)
  }
}

new App().start()
