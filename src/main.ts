import p5 from 'p5'
import setup from './modules/setup'

import './styles/global.scss'

const sketch = (s: p5) => {
  s.setup = () => setup(s)
}

new p5(sketch, document.querySelector('#app')! as HTMLDivElement)
