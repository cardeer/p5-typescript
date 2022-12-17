import 'reflect-metadata'

import './styles/global.scss'
import Setup from './modules/setup'
import { BaseCanvas, Canvas } from 'p5-decorators'

@Canvas('#app')
class App extends BaseCanvas {
  constructor() {
    super()

    this.register(Setup)
  }
}

new App().start()
